import type { AppProps } from 'next/app'

import { ThemeProvider } from 'styled-components'
import { AuthProvider } from 'contexts/AuthContext'

import theme from '../styles/theme'
import GlobalStyle from '../styles/global'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </ThemeProvider>
    </>
  )
}
