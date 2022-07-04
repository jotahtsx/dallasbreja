import Head from 'next/head'
import { canSSRAuth } from 'utils/canSSRAuth'

import {
  Container,
  Wrapper,
  ListOrders,
  OrderItem,
} from 'styles/pages/dashboard'

import { Header } from 'components/Header'

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Dallas Breja - Visão Geral</title>
      </Head>
      <Header />

      <Wrapper>
        <Container>
          <div className="headerPage">
            <h2>Últimos pedidos</h2>
            <p>Acompanhe aqui as solicitações de pedidos em tempo real</p>
          </div>
          <ListOrders>
            <OrderItem>
              <button>
                <span>Mesa 38</span>
              </button>
            </OrderItem>
            <OrderItem>
              <button>
                <span>Mesa 38</span>
              </button>
            </OrderItem>
            <OrderItem>
              <button>
                <span>Mesa 38</span>
              </button>
            </OrderItem>
          </ListOrders>
        </Container>
      </Wrapper>
    </>
  )
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getServerSideProps = canSSRAuth(async (ctx) => {
  return {
    props: {},
  }
})
