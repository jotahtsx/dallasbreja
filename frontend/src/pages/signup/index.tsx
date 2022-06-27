import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import { Container, Form } from 'styles/pages/home'

export default function SignUp() {
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
        <Form autoComplete="off">
          <input type="text" placeholder="Digite seu nome" />
          <input type="text" placeholder="Digite seu email" />
          <input type="password" placeholder="Digite sua senha" />
          <button type="submit">Cadastrar</button>
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
