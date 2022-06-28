import type { AppProps } from 'next/app'

import { ThemeProvider } from 'styled-components'
import { AuthProvider } from 'contexts/AuthContext'

import theme from '../styles/theme'
import GlobalStyle from '../styles/global'

import 'react-toastify/dist/ReactToastify.css'

import { ToastContainer } from 'react-toastify'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
        <ToastContainer
          position="bottom-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          limit={1}
        />
      </ThemeProvider>
    </>
  )
}
