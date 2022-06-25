import Head from 'next/head'

type Props = {
  title: string
}

export default function Home({ title = 'Dallas Breja' }: Props) {
  return (
    <>
      <Head>
        <title>Dallas Breja - Home</title>
      </Head>
      <h1>{title}</h1>
    </>
  )
}
