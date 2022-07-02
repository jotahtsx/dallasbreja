import { useContext } from 'react'
import Link from 'next/link'

import { Wrapper, Container, Nav } from 'styles/Header'
import { FaSignOutAlt } from 'react-icons/fa'

import { AuthContext } from 'contexts/AuthContext'

import Image from 'next/image'
import { ActiveLink } from 'components/ActiveLink'

export function Header() {
  const { signOut } = useContext(AuthContext)
  return (
    <Wrapper>
      <Container>
        <Link href="/dashboard">
          <a className="logo">
            <Image
              src="/images/logo-horizontal.svg"
              alt="Dallas Breja"
              title="Dallas Breja"
              width="193.43"
              height="31.89"
              priority={true}
            />
          </a>
        </Link>
        <Nav>
          <ActiveLink activeClassName="active" href="/dashboard">
            <a>Home</a>
          </ActiveLink>
          <ActiveLink activeClassName="active" href="/cardapio">
            <a>Cardápio</a>
          </ActiveLink>
          <ActiveLink activeClassName="active" href="/categorias">
            <a>Categorias</a>
          </ActiveLink>
          <div className="signOut">
            <Link href="/">
              <a onClick={signOut}>
                <span>Deslogar</span>
                <FaSignOutAlt size={16} />
              </a>
            </Link>
          </div>
        </Nav>
      </Container>
    </Wrapper>
  )
}
