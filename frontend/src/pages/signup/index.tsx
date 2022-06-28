import { useState, FormEvent, useContext } from 'react'

import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import { Container, Form } from 'styles/pages/home'
import { Btn } from 'components/ui/Button'

import { AuthContext } from 'contexts/AuthContext'
import { toast } from 'react-toastify'

export default function SignUp() {
  const { signUp } = useContext(AuthContext)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [loading, setLoading] = useState(false)

  async function handleSignUp(event: FormEvent) {
    event.preventDefault()

    if (name === '' || email === '' || password === '') {
      toast('❌ Preencha todos os campos')
      return
    }

    setLoading(true)

    const data = {
      name,
      email,
      password,
    }

    await signUp(data)

    setLoading(false)
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
          {name === '' || email === '' || password === '' ? (
            <Btn disabled type="submit" loading={loading}>
              Cadastrar
            </Btn>
          ) : (
            <Btn type="submit" loading={loading}>
              Cadastrar
            </Btn>
          )}
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
