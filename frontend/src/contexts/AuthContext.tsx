import { createContext, ReactNode, useState, useEffect } from 'react'

import { api } from 'services/apiClient'

import { destroyCookie, parseCookies, setCookie } from 'nookies'
import Router from 'next/router'

import { toast } from 'react-toastify'

type AuthContextData = {
  user?: UserProps
  isAuthenticated: boolean
  signIn: (credentials: SignInProps) => Promise<void>
  signOut: () => void
  signUp: (credentials: SignUpProps) => Promise<void>
}

type UserProps = {
  id: string
  name: string
  email: string
}

type SignInProps = {
  email: string
  password: string
}

type SignUpProps = {
  name: string
  email: string
  password: string
}

type AuthProviderProps = {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData)

export function signOut() {
  try {
    destroyCookie(undefined, '@dallasfridayauth.token')
    Router.push('/')
  } catch {
    console.log('Erro ao sair')
  }
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserProps>()
  const isAuthenticated = !!user

  useEffect(() => {
    // tentar pegar algo no cookie
    const { '@dallasfridayauth.token': token } = parseCookies()

    if (token) {
      api
        .get('/me')
        .then((response) => {
          const { id, name, email } = response.data

          setUser({
            id,
            name,
            email,
          })
        })
        .catch(() => {
          //Se deu erro deslogamos o user.
          signOut()
        })
    }
  }, [])

  async function signIn({ email, password }: SignInProps) {
    try {
      const response = await api.post('/session', {
        email,
        password,
      })
      // console.log(response.data)

      const { id, name, token } = response.data

      setCookie(undefined, '@dallasfridayauth.token', token, {
        maxAge: 60 * 60 * 24 * 30,
        path: '/', // Caminhos(Paths) que terão acesso ao cookie gerado
      })

      setUser({
        id,
        name,
        email,
      })

      //Passa para as próximas requisições o token que foi gerado
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      toast('✔️ Logado com êxito.')

      Router.push('/dashboard')
    } catch (err) {
      toast('❌ Falha ao acessar')
      console.log('Falha ao acessar ', err)
    }
  }

  async function signUp({ name, email, password }: SignUpProps) {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const response = await api.post('/users', {
        name,
        email,
        password,
      })

      toast('✔️ Cadastro realizado com êxito.')

      Router.push('/dashboard')
    } catch (err) {
      toast('Falha ao cadastrar usuário')
      console.log('Falha ao cadastrar usuário', err)
    }
  }

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, signIn, signOut, signUp }}
    >
      {children}
    </AuthContext.Provider>
  )
}
