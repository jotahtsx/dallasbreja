import { useState, FormEvent, useContext } from 'react'
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

import { toast } from 'react-toastify'

export default function SignUp() {
  const { signUp } = useContext(AuthContext)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [loading, setLoading] = useState(false)

  async function handleSignup(event: FormEvent) {
    event.preventDefault()

    if (name === '' || email === '' || password === '') {
      toast.dark('❌ Preencha todos os campos')
      return
    }

    setLoading(true)

    const data = {
      name,
      email,
      password
    }

    await signUp(data)

    setLoading(false)
  }

  return (
    <Wrapper>
      <Container>
        <Logo />
        <Form onSubmit={handleSignup}>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Digite seu nome"
          />
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
          <ButtonWrapper type="submit" loading={loading}>
            Cadastrar
          </ButtonWrapper>
          <UseFullLinks>
            <div>
              Já possui uma conta?&nbsp;
              <Link href="./">
                <a>
                  <span>Entrar</span>
                </a>
              </Link>
            </div>
          </UseFullLinks>
        </Form>
      </Container>
    </Wrapper>
  )
}
