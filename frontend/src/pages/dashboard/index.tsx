import Head from 'next/head'
import { canSSRAuth } from 'utils/canSSRAuth'

import { Header } from 'components/Header'

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Dallas Breja - Visão Geral</title>
      </Head>
      <Header />
    </>
  )
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getServerSideProps = canSSRAuth(async (ctx) => {
  return {
    props: {},
  }
})
