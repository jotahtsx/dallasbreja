import Head from 'next/head'

type Props = {
  title: string
}

export default function Home({ title = 'Dallas Bar' }: Props) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>

      <main></main>
    </div>
  )
}
