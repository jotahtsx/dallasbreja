import Head from 'next/head'
import { GetServerSideProps } from 'next'

import SignIn from 'components/SignIn'

export default function Home() {
  return (
    <>
      <Head>
        <title>Dallas Bar - Entrar</title>
      </Head>
      <SignIn />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  console.log('TESTANDO SERVER SIDE PROPS')

  return {
    props: {}
  }
}
