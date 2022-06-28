import { createContext, ReactNode, useState } from 'react'

import { api } from 'services/apiClient'

import { destroyCookie, setCookie } from 'nookies'
import Router from 'next/router'

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

      Router.push('/dashboard')
    } catch (err) {
      console.log('Erro ao acessar ', err)
    }
  }

  async function signUp({ name, email, password }: SignUpProps) {
    try {
      const response = await api.post('/users', {
        name,
        email,
        password,
      })

      console.log('Cadastro realizado com sucesso')

      Router.push('/')
    } catch (err) {
      console.log('Erro ao cadastrar usuário', err)
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
