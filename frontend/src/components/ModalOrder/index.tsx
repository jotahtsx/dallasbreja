import Modal from 'react-modal'

import { FiX } from 'react-icons/fi'

import { OrderItemProps } from 'pages/dashboard'
import { Container, Item } from 'styles/Modal'

interface ModalOrderProps {
  isOpen: boolean
  onRequestClose: () => void
  order: OrderItemProps[]
  handleFinishOrder: (id: string) => void
}

export function ModalOrder({
  isOpen,
  onRequestClose,
  order,
  handleFinishOrder,
}: ModalOrderProps) {
  const customStyles = {
    content: {
      top: '50%',
      bottom: 'auto',
      left: '50%',
      right: 'auto',
      padding: '1.875em',
      transform: 'translate(-50%, -50%)',
      background: '#2C3A47',
    },
  }
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
        style={{ background: 'transparent', border: 0 }}
      >
        <FiX size={45} color="#FFBB00" />
      </button>

      <Container>
        <h2>Detalhes do pedido</h2>
        <span className="table">
          Mesa: <strong>{order[0].order.table}</strong>
        </span>
        {order.map((item) => (
          <Item key={item.id}>
            <span className="title">
              {item.amount} - <strong>{item.product.name}</strong>
            </span>
            <p className="description">{item.product.description}</p>
          </Item>
        ))}

        <button
          className="buttonOrder"
          onClick={() => handleFinishOrder(order[0].order_id)}
        >
          Concluir Pedido
        </button>
      </Container>
    </Modal>
  )
}
