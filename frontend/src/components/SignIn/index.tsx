import { useContext, FormEvent, useState } from 'react'
import {
  Wrapper,
  Container,
  Form,
  UseFullLinks
} from 'styles/components/Friday'
import Link from 'next/link'

import Logo from '../../../public/images/logo-colored.svg'
import { Input } from 'styles/components/ui/input'
import { ButtonWrapper } from 'styles/components/ui/button'

import { AuthContext } from 'contexts/AuthContext'

export default function SignIn() {
  const { signIn } = useContext(AuthContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [loading, setLoading] = useState(false)

  async function handleLogin(event: FormEvent) {
    event.preventDefault()

    const data = {
      email,
      password
    }

    await signIn(data)
  }
  return (
    <Wrapper>
      <Container>
        <Logo />
        <Form onSubmit={handleLogin}>
          <Input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu email"
          />
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Digite sua senha"
          />
          <ButtonWrapper type="submit" loading={false}>
            Entrar
          </ButtonWrapper>
          <UseFullLinks>
            <div>
              Não tem uma conta?&nbsp;
              <Link href="/cadastrar">
                <a>
                  <span>Criar conta</span>
                </a>
              </Link>
            </div>
            <Link href="./">
              <a className="forgotPass">Esqueceu a senha?</a>
            </Link>
          </UseFullLinks>
        </Form>
      </Container>
    </Wrapper>
  )
}
