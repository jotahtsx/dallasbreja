import { useContext } from 'react'
import Link from 'next/link'
import { ActiveLink } from 'components/ActiveLink'
import { AuthContext } from 'contexts/AuthContext'

import { Nav, ButtonMobile } from 'styles/Header'

import { FaBars, FaSignOutAlt } from 'react-icons/fa'

export function Navbar() {
  const { signOut } = useContext(AuthContext)

  return (
    <>
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
      <ButtonMobile>
        <FaBars size={24} />
      </ButtonMobile>
    </>
  )
}
