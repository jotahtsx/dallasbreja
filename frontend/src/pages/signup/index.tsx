import { useState, FormEvent } from 'react'

import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import { Container, Form } from 'styles/pages/home'
import { Btn } from 'components/ui/Button'

export default function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [loading, setLoading] = useState(false)

  async function handleSignUp(event: FormEvent) {
    event.preventDefault()

    if (name === '' || email === '' || password === '') {
      alert('Um ou mais campos não foram preenchidos')
      return
    }

    setLoading(true)
  }

  return (
    <>
      <Head>
        <title>Dallas Breja - Cadastrar</title>
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
        <Form onSubmit={handleSignUp} autoComplete="off">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Digite seu nome"
          />
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Digite sua senha"
          />
          <Btn type="submit" loading={loading}>
            Cadastrar
          </Btn>
          <div className="links">
            <p>
              Já possui uma conta?{' '}
              <Link href="/">
                <a>Entrar</a>
              </Link>
            </p>
          </div>
        </Form>
      </Container>
    </>
  )
}
