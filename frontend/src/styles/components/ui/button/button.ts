import styled, { keyframes } from 'styled-components'

export const Button = styled.button`
  width: 100%;
  height: 3.125em;
  background-color: ${(props) => props.theme.colors.yellow};
  border: none;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 700;
  border-radius: 0.625em;
  transition: ease 600ms;
  margin-top: 0.2em;
  &[disabled] {
    svg {
      animation: animate 2s infinite;
    }
  }
  &:hover {
    background-color: #f7b731;
  }
  @keyframes animate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`
