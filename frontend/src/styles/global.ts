import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media(max-width: 1080px){
      font-size: 93.75%;
    }
    @media(max-width: 720px){
      font-size: 87.5%;
    }
  }

  body {
    background-color: ${(props) => props.theme.colors.grey};
    color: ${(props) => props.theme.colors.white};
    font: 400 1rem 'Work Sans', sans-serif;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`
