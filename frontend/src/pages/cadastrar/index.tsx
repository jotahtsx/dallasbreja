import Head from 'next/head'

import SignUp from 'components/Signup'

export default function Home() {
  return (
    <>
      <Head>
        <title>Dallas Bar - Efetuar cadastro</title>
      </Head>
      <SignUp />
    </>
  )
}
