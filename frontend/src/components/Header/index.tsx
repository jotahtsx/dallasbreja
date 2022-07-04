import Link from 'next/link'

import { Wrapper, Container } from 'styles/Header'

import Image from 'next/image'
import { Navbar } from './Navbar'

export function Header() {
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
        <Navbar />
      </Container>
    </Wrapper>
  )
}
