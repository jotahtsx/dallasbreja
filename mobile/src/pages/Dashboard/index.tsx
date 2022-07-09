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

import {AuthContext} from '../../context/AuthContext'

export default function Dashboard() {
    const {signOut} = useContext(AuthContext)

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Novo pedido</Text>
            <TextInput 
                placeholder="Número da mesa"
                placeholderTextColor="#576574"
                style={styles.input}
                keyboardType="numeric"
            />
            <TouchableOpacity style={styles.button}>
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