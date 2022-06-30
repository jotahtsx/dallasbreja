import { useContext } from 'react'
import Link from 'next/link'

import { Wrapper, Container, Nav } from 'styles/Header'
import { FaSignOutAlt } from 'react-icons/fa'

import { AuthContext } from 'contexts/AuthContext'

import Image from 'next/image'

export function Header() {
  const { signOut } = useContext(AuthContext)

  return (
    <Wrapper>
      <Container>
        <Link href="/">
          <a>
            <Image
              src="/images/logo.svg"
              alt="Dallas Breja"
              title="Dallas Breja"
              width="102"
              height="70"
              priority={true}
            />
          </a>
        </Link>
        <Nav>
          <li>
            <Link href="">
              <a>O cardápio</a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a>Cadastrar categoria</a>
            </Link>
          </li>
          <li className="signOut">
            <Link href="">
              <a onClick={signOut}>
                <span>Sair do sistema</span>
                <FaSignOutAlt size={16} />
              </a>
            </Link>
          </li>
        </Nav>
      </Container>
    </Wrapper>
  )
}
