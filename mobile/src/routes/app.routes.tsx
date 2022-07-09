import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Dashboard from '../pages/Dashboard'
import Orders from '../pages/Orders'

export type StackPromsList = {
    Dashboard: undefined
    Orders: {
        number: number | string
        order_id: string
    }

}

const Stack = createNativeStackNavigator<StackPromsList>()

function AppRoutes(){
    return(
        <Stack.Navigator>
        <Stack.Screen 
            name='Dashboard' 
            component={Dashboard}
            options={{headerShown: false}}
        />

        <Stack.Screen 
            name='Orders'
            component={Orders}
            options={{headerShown: false}}
        />
        </Stack.Navigator>
    )
}

export default AppRoutes