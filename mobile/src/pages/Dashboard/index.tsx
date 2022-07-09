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

export default function Dashboard() {
    const navigation = useNavigation<NativeStackNavigationProp<StackPromsList>>()
    const [number, setNumber] = useState('')

    async function openOrder(){
        if(number === ''){
            return
        }
        
        navigation.navigate('Orders', {
            number: number, 
            order_id: '670e1dd4-5a0b-40c9-8907-56ce7979e3cc'
        })
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Novo pedido</Text>
            <TextInput 
                placeholder="Número da mesa"
                placeholderTextColor="#576574"
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
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#fff',
        marginBottom: 15,
        borderStyle: 'solid',
        borderColor: '#c8d6e5',
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