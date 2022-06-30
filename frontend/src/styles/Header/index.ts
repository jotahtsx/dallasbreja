import styled from 'styled-components'

export const Wrapper = styled.header`
  width: 100%;
  height: 6.25em;
  background-color: rgba(44, 58, 71, 0.2);
`

export const Container = styled.div`
  width: 100%;
  max-width: 1140px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Nav = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 1.875em;
  li {
    a {
      transition: ease-in 300ms;
      &:hover {
        color: ${(props) => props.theme.colors.primary};
      }
    }
  }
  .signOut {
    a {
      display: flex;
      align-items: center;
      flex-direction: row;
      gap: 0.375em;
      span {
        margin-right: 2px;
      }
      svg {
        margin-top: 0.15625em;
      }
    }
  }
`
