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

import { ModalOrder } from 'components/ModalOrder'

import Modal from 'react-modal'

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

export type OrderItemProps = {
  id: string
  amount: number
  order_id: string
  product_id: string
  product: {
    id: string
    name: string
    description: string
    price: string
    banner: string
  }
  order: {
    id: string
    table: string
    status: boolean
    name: string | null
  }
}

export default function Dashboard({ orders }: HomeProps) {
  const [orderList] = useState(orders || [])

  const [modalItem, setModalItem] = useState<OrderItemProps[]>()
  const [modalVisible, setModalVisible] = useState(false)

  function handleCloseModal() {
    setModalVisible(false)
  }

  async function handleOpenModalView(id: string) {
    const apiClient = setupApiClient()
    const response = await apiClient.get('/order/details', {
      params: {
        order_id: id,
      },
    })

    setModalItem(response.data)
    setModalVisible(true)
  }

  function handleFinishDialogModal(id: string) {
    alert('FECHANDO O PEDIDO ' + id)
  }

  Modal.setAppElement('#__next')

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
                <button onClick={() => handleOpenModalView(item.id)}>
                  <span>Mesa {item.table}</span>
                </button>
              </OrderItem>
            ))}
          </ListOrders>
          {modalVisible && (
            <ModalOrder
              isOpen={modalVisible}
              onRequestClose={handleCloseModal}
              order={modalItem}
            />
          )}
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
