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

const SignUp = () => (
  <Wrapper>
    <Container>
      <Logo />
      <Form>
        <Input type="text" placeholder="Digite seu nome" />
        <Input type="text" placeholder="Digite seu email" />
        <Input type="password" placeholder="Digite sua senha" />
        <ButtonWrapper type="button" loading={false}>
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

export default SignUp
