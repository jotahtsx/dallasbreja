import { useRef, useState, ChangeEvent } from 'react'
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

export default function Product() {
  const [coverUrl, setCoverUrl] = useState('')
  const [imageCover, setImageCover] = useState(null)

  const ref = useRef(null)

  useClickOutside(ref, () => setIsDropDownVisible(false))

  const [isDropDownVisible, setIsDropDownVisible] = useState(false)

  const [itemsList] = useState([
    {
      id: 'a0b0f9ac-0d1a-4689-96ff-1250c35aa325',
      name: 'Bebidas',
      value: 'bebidas',
    },
    {
      id: '597320f4-c7a5-49a1-8aa8-aea2970fc12b',
      name: 'Pratos',
      value: 'pratos',
    },
    {
      id: '0a715051-b6f8-4c2e-bb87-eeb7f50fe622',
      name: 'Tira Gostos',
      value: 'tira-gostos',
    },
  ])

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

  return (
    <>
      <Head>
        <title>Dallas Breja - Cardápio</title>
      </Head>
      <Header />
      <Wrapper>
        <Container>
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
                ? itemsList[selectedItemIndex].name
                : 'Selecione uma categoria'}
            </div>
            {isDropDownVisible ? (
              <ItemsHolder>
                <SimpleBar style={{ maxHeight: 120 }}>
                  {itemsList.map((item, index) => (
                    <DropDownItem
                      onClick={() => {
                        setSelectedItemIndex(index)
                        setIsDropDownVisible(false)
                      }}
                      key={item.value}
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
          <input type="text" placeholder="Digite um título para o produto" />
          <input type="text" placeholder="Preço do produto" />
          <textarea placeholder="Faça uma pequena descrição do produto que será cadastrado no seu cardápio" />
          <Btn type="submit">Salvar</Btn>
        </Container>
      </Wrapper>
    </>
  )
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getServerSideProps = canSSRAuth(async (ctx) => {
  return {
    props: {},
  }
})
