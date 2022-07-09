import React from "react"
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    ScrollView
} from 'react-native'

import {CategoryProps} from '../../pages/Orders'

interface ModalPickerProps{
    options: CategoryProps[]
    handleCloseModal: () => void
    selectedItem: () => void
}

const {width: WIDTH, height: HEIGHT} = Dimensions.get('window')

export function ModalPicker({options, handleCloseModal, selectedItem}: ModalPickerProps){
    return(
        <TouchableOpacity style={styles.container} onPress={handleCloseModal}>
            <View style={styles.content}>
                <ScrollView showsHorizontalScrollIndicator={false}>

                </ScrollView>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        width: WIDTH - 20,
        height: HEIGHT / 2,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#c8d6e5',
        borderRadius: 4
    }
})