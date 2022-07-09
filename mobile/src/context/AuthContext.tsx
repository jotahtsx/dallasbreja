import React, {useState, createContext, ReactNode, useEffect} from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage'

import {api} from '../services/api'

type AuthContextData = {
    user: UserProps
    isAuthenticated: boolean,
    signIn: (credentials: SignInProps) => Promise<void>
}

type UserProps = {
    id: string,
    name: string,
    email: string,
    token: string
}

type AuthProviderProps = {
    children: ReactNode
}

type SignInProps = {
    email: string
    password: string
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({children}: AuthProviderProps){

    const [user, setUser] = useState<UserProps>({
        id: '',
        name: '',
        email: '',
        token: ''
    })

    const [loadingAuth, setLoadingAuth] = useState(false)

    const isAuthenticated = !!user.name

    useEffect(() => {

        async function getUser(){
            const userInfo = await AsyncStorage.getItem('@dallasbreja')
            let hasUser: UserProps = JSON.parse(userInfo || '{}')

            if(Object.keys(hasUser).length > 0){
                api.defaults.headers.common['Authorization'] = `Bearer ${hasUser.token}`

                setUser({
                    id: hasUser.id,
                    name: hasUser.name,
                    email: hasUser.email,
                    token: hasUser.token
                })

            }
        }

        getUser()

    }, [])

    async function signIn({email, password}: SignInProps){
        setLoadingAuth(true)

        try{
            const response = await api.post('/session', {
                email,
                password
            })

            // console.log(response.data)

            const {id, name, token} = response.data
            
            const data = {
                ...response.data
            }

            await AsyncStorage.setItem('@dallasbreja', JSON.stringify(data))

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`
            
            setUser({
                id,
                name,
                email,
                token
            })

            setLoadingAuth(false)

        }catch(err){
            console.log('Erro ao acessar', err)
            setLoadingAuth(false)
        }
    }

    return(
        <AuthContext.Provider value={{user, isAuthenticated, signIn}}>
            {children}
        </AuthContext.Provider>
    )
}