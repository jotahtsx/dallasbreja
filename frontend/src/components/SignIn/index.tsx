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

const SignIn = () => (
  <Wrapper>
    <Container>
      <Logo />
      <Form>
        <Input type="text" placeholder="Digite seu email" />
        <Input type="password" placeholder="Digite sua senha" />
        <ButtonWrapper type="button" loading={false}>
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

export default SignIn
