import styled from 'styled-components'

export const Wrapper = styled.header`
  width: 100%;
  height: 4.375em;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`

export const Container = styled.div`
  width: 100%;
  max-width: 1140px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 17.5em) and (max-width: 80em) {
    max-width: 100%;
    padding: 0 1.25rem;
  }
  .logo {
    line-height: 0;
  }
`

export const Nav = styled.nav`
  list-style-type: none;
  display: flex;
  gap: 2.5em;
  @media (min-width: 17.5em) and (max-width: 33.75em) {
    display: none;
  }
  a {
    transition: ease-in 300ms;
    height: 4.375em;
    line-height: 4.375em;
    position: relative;
    font-weight: 500;
    &:hover {
      color: ${(props) => props.theme.colors.primary};
    }
    &.active {
      color: ${(props) => props.theme.colors.primary};
    }
    &.active::after {
      width: 100%;
      content: '';
      height: 0.125em;
      position: absolute;
      bottom: 0;
      left: 0;
      background-color: ${(props) => props.theme.colors.primary};
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

export const ButtonMobile = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  svg {
    fill: ${(props) => props.theme.colors.white};
  }

  @media (min-width: 33.8125em) and (max-width: 120em) {
    display: none;
  }
`
