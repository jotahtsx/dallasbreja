import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`

export const Container = styled.form`
  width: 100%;
  max-width: 22.25em;
  margin: 0 auto;
  display: flex;
  gap: 1.25em;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (min-width: 17.5em) and (max-width: 33.75em) {
    max-width: 100%;
    padding: 0 1.25rem;
  }
  p {
    font-size: 0.813rem;
    line-height: 1.5rem;
    letter-spacing: 0.088rem;
    font-weight: 300;
    text-align: center;
    color: ${(props) => props.theme.colors.text};
  }
  input[type='text'] {
    width: 100%;
    height: 3.75em;
    border: 2px solid ${(props) => props.theme.colors.grey};
    border-radius: 0.625em;
    padding: 0 3.75em;
    transition: 0.5s;
    outline: none;
  }
  input[type='text']:focus {
    border: 2px solid ${(props) => props.theme.colors.primary};
  }
  input {
    color: ${(props) => props.theme.colors.lightGrey};
    font-size: 0.938rem;
  }
  input::placeholder {
    color: ${(props) => props.theme.colors.lightGrey};
  }
`
