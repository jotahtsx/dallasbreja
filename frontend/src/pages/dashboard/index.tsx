import { useState } from 'react'
import Head from 'next/head'
import { canSSRAuth } from 'utils/canSSRAuth'

import {
  Container,
  Wrapper,
  ListOrders,
  OrderItem,
} from 'styles/pages/dashboard'

import { Header } from 'components/Header'

import { setupApiClient } from 'services/api'

type OrderProps = {
  id: string
  table: string | number
  status: boolean
  draft: boolean
  name: string | null
}

interface HomeProps {
  orders: OrderProps[]
}

export default function Dashboard({ orders }: HomeProps) {
  const [orderList] = useState(orders || [])

  function handleOpenModalView() {
    alert('abrindo detalhes do pedido')
  }

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
            {orderList.map((item) => (
              <OrderItem key={item.id}>
                <button onClick={() => handleOpenModalView()}>
                  <span>Mesa {item.table}</span>
                </button>
              </OrderItem>
            ))}
          </ListOrders>
        </Container>
      </Wrapper>
    </>
  )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
  const apiClient = setupApiClient(ctx)

  const response = await apiClient.get('/orders')

  // console.log(response.data)

  return {
    props: {
      orders: response.data,
    },
  }
})
