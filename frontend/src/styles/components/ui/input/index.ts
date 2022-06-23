import styled from 'styled-components'

export const Input = styled.input`
  width: 100%;
  height: 3.125em;
  background-color: transparent;
  border: 2px solid rgba(245, 245, 245, 0.5);
  padding: 0 1em;
  border-radius: 0.625em;
  color: ${(props) => props.theme.colors.lightGrey};
  transition: ease 600ms;
  &:focus {
    outline: none;
    border: 2px solid ${(props) => props.theme.colors.yellow};
  }
  &::placeholder {
    color: ${(props) => props.theme.colors.white};
  }
`
