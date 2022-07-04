import styled from 'styled-components'

export const Container = styled.div`
  width: 34.375em;
  @media (min-width: 17.5em) and (max-width: 18.75em) {
    width: 17.5em;
  }
  @media (min-width: 20.9375em) and (max-width: 45.5em) {
    width: 20.9375em;
  }
  h2 {
    padding: 1em 0;
  }
  .buttonOrder {
    margin-top: 0.3125em;
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.primary};
    font-weight: 600;
    border: none;
    padding: 1rem;
    border-radius: 0.625em;
  }
  .table {
    font-size: 1.3rem;
    strong {
      color: ${(props) => props.theme.colors.primary};
    }
  }
`

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1em 0;

  .title {
    font-weight: 600;
  }
  .description {
    font-size: 0.875rem;
    margin-top: 0.3125em;
    font-style: italic;
    font-weight: 300;
    word-break: break-all;
  }
  strong {
    color: ${(props) => props.theme.colors.primary};
  }
`
