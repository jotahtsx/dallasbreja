import React, {useContext, useState} from "react"
import 
    {
        View, 
        Text, 
        SafeAreaView, 
        TouchableOpacity, 
        TextInput,
        StyleSheet
    } from "react-native"

import {useNavigation} from '@react-navigation/native'

import {NativeStackNavigationProp} from '@react-navigation/native-stack'
import {StackPromsList} from '../../routes/app.routes'

import {api} from '../../services/api'

export default function Dashboard() {
    const navigation = useNavigation<NativeStackNavigationProp<StackPromsList>>()
    const [number, setNumber] = useState('')

    async function openOrder(){
        if(number === ''){
            return
        }
        
        const response = await api.post('/order', {
            table: Number(number)
        })

        //console.log(response.data)

        navigation.navigate('Orders', {
            number: number, 
            order_id: response.data.id
        })

        setNumber('')
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Novo pedido</Text>
            <TextInput 
                placeholder="Número da mesa"
                placeholderTextColor="#fff"
                style={styles.input}
                keyboardType="numeric"
                value={number}
                onChangeText={setNumber}
            />
            <TouchableOpacity style={styles.button} onPress={openOrder}>
                <Text style={styles.buttonText}>Abrir mesa</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15,
        backgroundColor: '#181820'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 24
    },
    input: {
        width: '90%',
        height: 50,
        textAlign: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#1e272e',
        marginBottom: 15,
        borderStyle: 'solid',
        borderColor: '#485460',
        color: '#fff',
        borderWidth: 2,
        borderRadius: 10,
        fontSize: 16
    },
    button: {
        width: '90%',
        height: 60,
        backgroundColor: '#ECAE04',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: '#000'
    }
})