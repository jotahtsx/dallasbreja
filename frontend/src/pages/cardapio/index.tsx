import { useRef, useState, ChangeEvent, FormEvent } from 'react'
import Head from 'next/head'

import SimpleBar from 'simplebar-react'

import { Header } from 'components/Header'
import {
  Container,
  Wrapper,
  Dropdown,
  ItemsHolder,
  DropDownItem,
} from 'styles/pages/product'

import { canSSRAuth } from 'utils/canSSRAuth'
import { Btn } from 'components/ui/Button'

import 'simplebar-react/dist/simplebar.min.css'

import useClickOutside from 'utils/useClickOutside'

import { FiUpload } from 'react-icons/fi'

import { toast } from 'react-toastify'

import { setupApiClient } from 'services/api'

type ItemProps = {
  id: string
  name: string
}

interface CategoryProps {
  categoryList: ItemProps[]
}

export default function Product({ categoryList }: CategoryProps) {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')

  const [coverUrl, setCoverUrl] = useState('')
  const [imageCover, setImageCover] = useState(null)

  const [categories, setCategories] = useState(categoryList || [])

  const ref = useRef(null)

  useClickOutside(ref, () => setIsDropDownVisible(false))

  const [isDropDownVisible, setIsDropDownVisible] = useState(false)

  const [selectedItemIndex, setSelectedItemIndex] = useState(null)

  function handleFile(e: ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) {
      return
    }

    const image = e.target.files[0]

    if (!image) {
      return
    }

    if (image.type === 'image/jpeg' || image.type === 'image/png') {
      setImageCover(image)
      setCoverUrl(URL.createObjectURL(e.target.files[0]))
    }
  }

  function handleChangeCategory(event) {
    setSelectedItemIndex(event.target.value)
  }

  async function handleRegister(event: FormEvent) {
    event.preventDefault()

    try {
      const data = new FormData()

      if (
        name === '' ||
        price === '' ||
        description === '' ||
        imageCover === null
      ) {
        toast('Preencha todos os campos')
        return
      }

      data.append('name', name)
      data.append('price', price)
      data.append('description', description)
      data.append('category_id', categories[selectedItemIndex].id)
      data.append('file', imageCover)

      const apiClient = setupApiClient()

      await apiClient.post('/product', data)

      toast('Cadastro realizado com sucesso')
    } catch (err) {
      console.log(err)
      toast('Falha ao cadastrar produto')
    }

    setName('')
    setPrice('')
    setDescription('')
    setImageCover(null)
    setCoverUrl('')
  }

  return (
    <>
      <Head>
        <title>Dallas Breja - Cardápio</title>
      </Head>
      <Header />
      <Wrapper>
        <Container onSubmit={handleRegister}>
          <h2>Cardápio</h2>
          <p>
            Envie uma imagem, selecione uma categoria e escolha um título para
            nomear o seu produto
          </p>
          <label className="labelCover">
            <div className="labelIcon">
              <FiUpload size={35} color="#FFF" />
            </div>
            <input
              type="file"
              accept="image/png, image/jpeg"
              onChange={handleFile}
            />

            {coverUrl && (
              <img
                className="preview"
                src={coverUrl}
                alt=""
                width="100%"
                height="150"
              />
            )}
          </label>
          <Dropdown ref={ref}>
            <div
              className={
                'dropdown-selection ' + (isDropDownVisible ? 'visible' : '')
              }
              onClick={() => {
                setIsDropDownVisible(!isDropDownVisible)
              }}
            >
              {selectedItemIndex !== null
                ? categories[selectedItemIndex].name
                : 'Selecione uma categoria'}
            </div>
            {isDropDownVisible ? (
              <ItemsHolder>
                <SimpleBar style={{ maxHeight: 120 }}>
                  {categories.map((item, index) => (
                    <DropDownItem
                      onClick={() => {
                        setSelectedItemIndex(index)
                        setIsDropDownVisible(false)
                      }}
                      key={item.id}
                    >
                      {item.name}
                    </DropDownItem>
                  ))}
                </SimpleBar>
              </ItemsHolder>
            ) : (
              <></>
            )}
          </Dropdown>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Digite um título para o produto"
          />
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Preço do produto"
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Faça uma pequena descrição do produto que será cadastrado no seu cardápio"
          />
          <Btn type="submit">Salvar</Btn>
        </Container>
      </Wrapper>
    </>
  )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
  const apiClient = setupApiClient(ctx)

  const response = await apiClient.get('/category')

  // console.log(response.data)

  return {
    props: {
      categoryList: response.data,
    },
  }
})
