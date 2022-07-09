import React, {useContext} from "react"
import {View, Text, Button} from "react-native"

import {AuthContext} from '../../context/AuthContext'

export default function Dashboard() {
    const {signOut} = useContext(AuthContext)

    return (
        <View>
            <Text>Visão Geral</Text>
            <Button title="Sair" onPress={signOut}></Button>
        </View>
    )
}