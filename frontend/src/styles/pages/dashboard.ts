import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`

export const Container = styled.div`
  width: 100%;
  max-width: 34.375em;
  margin: 0 auto;
  display: flex;
  gap: 1.25em;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (min-width: 17.5em) and (max-width: 80em) {
    max-width: 100%;
    padding: 0 1.25rem;
  }
  .headerPage {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h2 {
      margin-bottom: 0.3125em;
    }
  }
  button {
    width: 100%;
    background-color: transparent;
    border: none;
  }
  p {
    font-size: 0.813rem;
    line-height: 1.5rem;
    letter-spacing: 0.088rem;
    font-weight: 300;
    text-align: center;
    color: ${(props) => props.theme.colors.text};
  }
`

export const ListOrders = styled.ul`
  list-style: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.9375em;
`

export const OrderItem = styled.li`
  width: 100%;
  height: 3.75em;
  button {
    height: 100%;
    display: flex;
    align-items: center;
    border: none;
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.darkGrey};
    transition: all 0.6s;
    font-size: 1rem;
    border-radius: 0.5em;
    span {
      margin-left: 1rem;
    }
    &:hover {
      background-color: ${(props) => props.theme.colors.darkBlue};
    }
  }
`
