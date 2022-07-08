import React, {useState, createContext} from 'react'

type AuthContextData = {
    user: UserProps
    isAthenticated: boolean
}

type UserProps = {
    id: string,
    name: string,
    email: string,
    token: string
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider(){

    const [user, setUser] = useState<UserProps>({
        id: '',
        name: '',
        email: '',
        token: ''
    })

    const isAthenticated = !!user.name

    return(
        <AuthContext.Provider value={{user, isAthenticated}}>

        </AuthContext.Provider>
    )
}