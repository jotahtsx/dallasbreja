import React from "react"
import {
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity
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
    }
})