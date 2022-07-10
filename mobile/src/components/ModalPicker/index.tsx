import React, {useEffect} from "react"

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
    selectedItem: (item: CategoryProps) => void
}

const {width: WIDTH, height: HEIGHT} = Dimensions.get('window')

export function ModalPicker({options, handleCloseModal, selectedItem}: ModalPickerProps){

    function onPressItem(item: CategoryProps){
        selectedItem(item)
        handleCloseModal()
    }

    const option = options.map((item, index) => (
        <TouchableOpacity 
            key={index} 
            style={styles.option} 
            onPress={() => onPressItem(item)}
        >
            <Text style={styles.item}>
                {item?.name}
            </Text>
        </TouchableOpacity>
    ))

    return(

        <TouchableOpacity style={styles.container} onPress={handleCloseModal}>
            <View style={styles.content}>
                <ScrollView showsHorizontalScrollIndicator={false}>
                    {option}
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
        width: WIDTH - 30,
        height: HEIGHT / 3,
        position: 'absolute',
        top: '22.8%',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 4
    },
    option: {
        alignItems: 'flex-start',
        borderBottomWidth: 0.8,
        borderBottomColor: '#c8d6e5'
    },
    item: {
        margin: 18,
        fontSize: 14,
        color: '#000',
    }
})