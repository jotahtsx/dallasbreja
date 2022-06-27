import { useContext, FormEvent } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import { Container, Form } from 'styles/pages/home'

import { AuthContext } from 'contexts/AuthContext'

export default function Home() {
  const { signIn } = useContext(AuthContext)

  async function handleLogin(event: FormEvent) {
    event.preventDefault()

    const data = {
      email: 'algum@teste.com',
      password: '123123',
    }

    await signIn(data)
  }

  return (
    <>
      <Head>
        <title>Dallas Breja - Entrar</title>
      </Head>
      <Container>
        <Link href="/">
          <a>
            <Image
              src="/images/logo.svg"
              alt="Dallas Breja"
              title="Dallas Breja"
              width="112"
              height="80"
              priority={true}
            />
          </a>
        </Link>
        <Form onSubmit={handleLogin} autoComplete="off">
          <input type="text" placeholder="Digite seu email" />
          <input type="password" placeholder="Digite sua senha" />
          <button type="submit">Entrar</button>
          <div className="links">
            <p>
              Não tem uma conta?{' '}
              <Link href="/signup">
                <a>Cadastre-se</a>
              </Link>
            </p>
          </div>
        </Form>
      </Container>
    </>
  )
}
