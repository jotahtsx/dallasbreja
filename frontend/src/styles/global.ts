import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #__next {
    height: 100%;
  }

  html {
    @media(max-width: 1080px) {
      font-size: 93.75%;
    }
    @media(max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
  }

  body, input, textarea, button, option, select, .Toastify__toast {
    font-family: 'Work Sans', sans-serif;
    font-weight: 400;
  }

  input, textarea{
    outline: none;
  }

  .Toastify__toast{
    font-size: 0.938rem;
  }

  .Toastify__progress-bar{
    background-color: ${(props) => props.theme.colors.primary};
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  a{
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
    &:hover{
      background-color: ${(props) => props.theme.colors.primary} !important
    }
    svg {
      animation: animate 2s infinite;
    }
  }
`

export default GlobalStyle
