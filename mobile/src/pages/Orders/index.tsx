import React, {useState, useEffect} from "react"
import {
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity,
    TextInput,
    Modal,
} from 'react-native'

import {useRoute, RouteProp, useNavigation} from '@react-navigation/native'

import {Feather} from '@expo/vector-icons'
import {api} from '../../services/api'
import {ModalPicker} from '../../components/ModalPicker'

type RouteDetailsParams = {
    Orders: {
        number: string | number
        order_id: string
    }
}

export type CategoryProps = {
    id: string
    name: string
}

type ProductProps = {
    id: string
    name: string
}

type OrderRouteProps = RouteProp<RouteDetailsParams, 'Orders'>

export default function Orders(){
    const route = useRoute<OrderRouteProps>()
    const navigation = useNavigation()

    const [category, setCategory] = useState<CategoryProps[] | []>([])
    const [categorySelected, setCategorySelected] = useState<CategoryProps>()
    const [modalCategoryVisible, setModalCategoryVisible] = useState(false)

    const [products, setProducts] = useState<ProductProps[] | []>([])
    const [productsSelected, setProductsSelected] = useState<ProductProps | undefined>()
    const [modalProductVisible, setModalProductVisible] = useState(false)

    const [amount, setAmount] = useState('1')

    useEffect(() => {
        async function loadInfo(){
            const response = await api.get('/category')
            
            setCategory(response.data)
            setCategorySelected(response.data[0])
        }

        loadInfo()
    }, [])

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

    function handleChangeCategory(item: CategoryProps){
        setCategorySelected(item)
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Mesa {route.params.number}</Text>
                <TouchableOpacity onPress={handleCloseOrder}>
                    <Feather name="trash-2" size={28} color="#ECAE04" />
                </TouchableOpacity>
            </View>

            {category.length !== 0 && (
                <TouchableOpacity 
                    style={styles.input} 
                    onPress={() => setModalCategoryVisible(true)}>
                    <Text style={{color: '#fff'}}>
                        {categorySelected?.name}
                    </Text>
                </TouchableOpacity>
            )}

            <TouchableOpacity style={styles.input}>
                <Text style={{color: '#fff'}}>Cerveja Antártica</Text>
            </TouchableOpacity>

            <View style={styles.qtyContainer}>
                <Text style={[styles.qtyText, {color: '#fff'}]}>Quantidade:</Text>
            </View>

            <View style={styles.actions}>
                <TextInput
                    style={[styles.input, {width: '65%', textAlign: 'center'}]}
                    placeholderTextColor="#fff"
                    keyboardType="numeric"
                    value={amount}
                    onChangeText={setAmount}
                />
                <TouchableOpacity style={styles.buttonIncrease}>
                    <Text style={styles.buttonIncreaseText}>+</Text>
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity style={styles.buttonContinue}>
                    <Text style={styles.buttonContinueText}>Avançar</Text>
                </TouchableOpacity>
            </View>

            <Modal
                transparent={true}
                visible={modalCategoryVisible}
                animationType='fade'
            >
                <ModalPicker
                    handleCloseModal={() => setModalCategoryVisible(false)}
                    options={category}
                    selectedItem={handleChangeCategory}
                
                />
            </Modal>

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
        backgroundColor: '#1e272e',
        borderStyle: 'solid',
        borderColor: '#485460',
        borderWidth: 2,
        color: '#fff',
        borderRadius: 6,
        height: 50,
        marginBottom: 12,
        justifyContent: 'center',
        paddingHorizontal: 20,
        fontSize: 20
    },
    qtyContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    qtyText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 15,
        marginTop: 10,
    },
    actions: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15
    },
    buttonIncrease: {
        width: '30%',
        height: 50,
        backgroundColor: '#33d9b2',
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
        width: '100%',
        height: 60,
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