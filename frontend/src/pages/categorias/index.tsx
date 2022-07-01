import { useState, FormEvent } from 'react'
import Head from 'next/head'

import { Header } from 'components/Header'
import { Container, Wrapper } from 'styles/Category'
import { Btn } from 'components/ui/Button'

import { setupApiClient } from '../../services/api'
import { toast } from 'react-toastify'

export default function Category() {
  const [name, setName] = useState('')

  async function handleCreate(event: FormEvent) {
    event.preventDefault()

    if (name === '') {
      return
    }

    const apiClient = setupApiClient()
    await apiClient.post('/category', {
      name: name,
    })

    toast('✔️ Cadastro realizado com êxito.')
    setName('')
  }

  return (
    <>
      <Head>
        <title>Dallas Breja - Visão Geral</title>
      </Head>
      <Header />
      <Wrapper>
        <Container onSubmit={handleCreate}>
          <h2>Categorias</h2>
          <p>
            As categorias são utilizadas para organizar e agrupar os produtos do
            seu cardápio.
          </p>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Digite o nome para a categoria"
          />
          <Btn type="submit">Salvar</Btn>
        </Container>
      </Wrapper>
    </>
  )
}
