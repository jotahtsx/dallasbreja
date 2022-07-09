import React from "react"
import {
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity,
    TextInput
} from 'react-native'

import {useRoute, RouteProp} from '@react-navigation/native'

import {Feather} from '@expo/vector-icons'

type RouteDetailsParams = {
    Orders: {
        number: string | number
        order_id: string
    }
}

type OrderRouteProps = RouteProp<RouteDetailsParams, 'Orders'>

export default function Orders(){
    const route = useRoute<OrderRouteProps>()

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Mesa {route.params.number}</Text>
                <TouchableOpacity>
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
    }
})