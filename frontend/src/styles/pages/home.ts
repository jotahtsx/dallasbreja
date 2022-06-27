import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 360px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3.125em;
  @media (min-width: 17.5em) and (max-width: 23.4375em) {
    padding: 0 0.75em;
  }
`

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.25em;
  input[type='text'] {
    width: 100%;
    height: 3.125em;
    background-color: transparent;
    border: 2px solid ${(props) => props.theme.colors.secondary};
    border-radius: 0.625em;
    padding: 0 1.25em;
    transition: 0.5s;
    outline: none;
  }
  input[type='text']:focus {
    border: 2px solid ${(props) => props.theme.colors.primary};
  }
  input[type='password'] {
    width: 100%;
    height: 3.125em;
    background-color: transparent;
    border: 2px solid ${(props) => props.theme.colors.secondary};
    border-radius: 0.625em;
    padding: 0 1.25em;
    transition: 0.5s;
    outline: none;
  }
  input[type='password']:focus {
    border: 2px solid ${(props) => props.theme.colors.primary};
  }
  input {
    color: ${(props) => props.theme.colors.secondary};
    font-size: 1.063rem;
  }
  input::placeholder {
    color: ${(props) => props.theme.colors.secondary};
  }
  button {
    height: 3.125em;
    background-color: ${(props) => props.theme.colors.primary};
    font-size: 1rem;
    border: none;
    border-radius: 0.625em;
    text-transform: uppercase;
    font-weight: 600;
    transition: 0.5s;
    &:hover {
      background-color: rgba(236, 174, 4, 0.8);
    }
  }
  p {
    text-align: center;
    font-weight: 300;
    a {
      font-weight: 600;
    }
  }
`
