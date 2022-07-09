import React from "react"
import {
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity,
    TextInput
} from 'react-native'

import {useRoute, RouteProp, useNavigation} from '@react-navigation/native'

import {Feather} from '@expo/vector-icons'

import {api} from '../../services/api'

type RouteDetailsParams = {
    Orders: {
        number: string | number
        order_id: string
    }
}

type OrderRouteProps = RouteProp<RouteDetailsParams, 'Orders'>

export default function Orders(){
    const route = useRoute<OrderRouteProps>()
    const navigation = useNavigation()

    async function handleCloseOrder(){
        try{
            await api.delete('/order', {
                params: {
                    order_id: route.params?.order_id
                }
            })

            navigation.goBack()

        }catch(err){
            console.log(err)
        }
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Mesa {route.params.number}</Text>
                <TouchableOpacity onPress={handleCloseOrder}>
                    <Feather name="trash-2" size={28} color="#ECAE04" />
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.input}>
                <Text>Bebidas</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.input}>
                <Text>Cerveja Antártica</Text>
            </TouchableOpacity>

            <View style={styles.qtyContainer}>
                <Text style={[styles.qtyText, {color: '#fff'}]}>Quantidade de Itens:</Text>
                <TextInput
                    style={[styles.input, {width: '100%', textAlign: 'center'}]}
                    placeholderTextColor="#576574"
                    keyboardType="numeric"
                    value="1"
                />
            </View>

            <View style={styles.actions}>
                <TouchableOpacity style={styles.buttonIncrease}>
                    <Text style={styles.buttonIncreaseText}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContinue}>
                    <Text style={styles.buttonContinueText}>Avançar</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#181820',
        padding: '5%',
        paddingStart: '4%',
        paddingEnd: '4%'
    },
    header: {
        flexDirection: 'row',
        marginBottom: 12,
        alignItems: 'center',
        marginTop: 24
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
        marginRight: 15
    },
    input: {
        width: '100%',
        backgroundColor: '#fff',
        borderStyle: 'solid',
        borderColor: '#c8d6e5',
        borderWidth: 2,
        borderRadius: 6,
        height: 50,
        marginBottom: 12,
        justifyContent: 'center',
        paddingHorizontal: 20,
        fontSize: 20
    },
    qtyContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    qtyText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 15,
        marginTop: 10
    },
    actions: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    buttonIncrease: {
        width: '17%',
        height: 50,
        backgroundColor: '#0652DD',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
    },
    buttonIncreaseText: {
        fontSize: 30,
        color: '#fff',
        fontWeight: 'bold'
    },
    buttonContinue: {
        width: '80%',
        height: 50,
        backgroundColor: '#ECAE04',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
    },
    buttonContinueText: {
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: '#000'
    },
})