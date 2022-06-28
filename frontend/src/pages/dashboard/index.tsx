import Head from 'next/head'

import { canSSRAuth } from 'utils/canSSRAuth'

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Dallas Breja - Visão Geral</title>
      </Head>
      <h1>dashboard</h1>
    </>
  )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
  return {
    props: {},
  }
})
