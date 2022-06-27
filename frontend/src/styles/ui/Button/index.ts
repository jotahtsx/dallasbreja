import styled from 'styled-components'

export const Button = styled.button`
  height: 3.125em;
  background-color: ${(props) => props.theme.colors.primary};
  font-size: 1rem;
  border: none;
  border-radius: 0.625em;
  text-transform: uppercase;
  font-weight: 600;
  transition: 0.5s;
  color: ${(props) => props.theme.colors.dark};

  @keyframes animate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  &:hover {
    background-color: rgba(236, 174, 4, 0.8);
  }
`
