import {
  Wrapper,
  Container,
  Login,
  UseFullLinks
} from 'styles/components/SignIn'
import Link from 'next/link'

import Logo from '../../../public/images/logo-colored.svg'
import { Input } from 'styles/components/ui/input'
import { ButtonWrapper } from 'styles/components/ui/button'

const SignIn = () => (
  <Wrapper>
    <Container>
      <Logo />
      <Login>
        <Input type="text" placeholder="Digite seu email" />
        <Input type="password" placeholder="Digite sua senha" />
        <ButtonWrapper type="button" loading={false}>
          Entrar
        </ButtonWrapper>
        <UseFullLinks>
          <Link href="./">
            <a>
              Não tem uma conta? <span>Fazer conta</span>
            </a>
          </Link>
          <Link href="./">
            <a className="forgotPass">Esqueceu a senha?</a>
          </Link>
        </UseFullLinks>
      </Login>
    </Container>
  </Wrapper>
)

export default SignIn
