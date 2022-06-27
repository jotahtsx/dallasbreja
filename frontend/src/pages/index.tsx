import { useContext, FormEvent, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import { Container, Form } from 'styles/pages/home'
import { Btn } from 'components/ui/Button'

import { AuthContext } from 'contexts/AuthContext'

export default function Home() {
  const { signIn } = useContext(AuthContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [loading, setLoading] = useState(false)

  async function handleLogin(event: FormEvent) {
    event.preventDefault()

    if (email === '' || password === '') {
      alert('Um ou mais campos não foram preenchidos')
      return
    }

    setLoading(true)

    const data = {
      email,
      password,
    }

    await signIn(data)

    setLoading(false)
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
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu email"
          />
          <input
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {email === '' || password === '' ? (
            <Btn disabled type="submit">
              Entrar
            </Btn>
          ) : (
            <Btn type="submit" loading={loading}>
              Entrar
            </Btn>
          )}
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
