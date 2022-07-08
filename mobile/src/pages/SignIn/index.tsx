import React from 'react'
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'

export default function SignIn(){
    return(
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../../assets/logo.png')} />

            <View style={styles.inputContainer}>
                <TextInput placeholderTextColor={'#fff'} placeholder='Digite o seu email' style={styles.input} />
                <TextInput placeholderTextColor={'#fff'} secureTextEntry={true} placeholder='Digite a sua senha' style={styles.input} />
            
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
            
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#181820'
    },
    logo: {
        marginBottom: 30,
    },
    inputContainer: {
        width: '95%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 32,
        paddingHorizontal: 14,

    },
    input: {
        width: '95%',
        height: 50,
        paddingLeft: 30,
        paddingRight: 30,
        color: '#fff',
        backgroundColor: '#181820',
        marginBottom: 15,
        borderStyle: 'solid',
        borderColor: '#86868A',
        borderWidth: 2,
        borderRadius: 10
    },
    button: {
        width: '95%',
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