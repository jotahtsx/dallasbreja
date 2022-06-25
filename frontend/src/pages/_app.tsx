import { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from 'styled-components'
import { AuthProvider } from 'contexts/AuthContext'

import { GlobalStyles } from 'styles/global'
import theme from 'styles/theme'
import 'react-toastify/dist/ReactToastify.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <GlobalStyles />
        <Component {...pageProps} />
        <ToastContainer
          autoClose={5000}
          closeOnClick={true}
          position={'bottom-left'}
        />
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
