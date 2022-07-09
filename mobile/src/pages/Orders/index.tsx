import React from "react"
import {View, Text, StyleSheet} from 'react-native'

import {useRoute, RouteProp} from '@react-navigation/native'

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
            <Text>Tela order</Text>
            <Text>
                {route.params.number}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    }
})