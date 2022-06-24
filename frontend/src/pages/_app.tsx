import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { AuthProvider } from 'contexts/AuthContext'

import { GlobalStyles } from 'styles/global'
import theme from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <GlobalStyles />
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
