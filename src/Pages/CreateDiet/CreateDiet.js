import { Text, View, ScrollView, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import styles from "./CreateDiet.style"
import { useDispatch, useSelector } from 'react-redux'
import { addDiet } from '../../context/AsyncDietContext/AsyncDietSlice'
import DateModal from '../../components/DateModal'

const CreateDiet = () => {
    const [name, setName] = useState(null)
    const [description, setDescription] = useState(null)
    const [karbonhidrat, setKarbonhidrat] = useState(null)
    const [seker, setSeker] = useState(null)
    const [yag, setYag] = useState(null)
    const [enerjikalori, setEnerjikalori] = useState(null)
    const [protein, setProtein] = useState(null)
    const [modalVisible, setModalVisible] = useState(false);
    const [value, setValue] = useState()
    const dispatch = useDispatch()
    const { dietList } = useSelector(st => st.dietLists)


    const handleDiet = async () => {

        if (name === null || description === null || karbonhidrat === null || seker === null || yag === null || enerjikalori === null || protein === null) {
            console.log("null içinde ")
            return true
        }

        setValue({ name: name, description: description, karbonhidrat: karbonhidrat, seker: seker, yag: yag, enerjikalori: enerjikalori, protein: protein })

        if (dietList?.find(item => item.name === name)) {
            console.log("aynı isim var")
            Alert.alert("Warning", "This diet has already name the programs")
        }
        else {
            console.log("elsedeyiz", value)

            setModalVisible(true)
            //dispatch(addDiet(value))



            setName(null)
            setDescription(null)
            setKarbonhidrat(null)
            setSeker(null)
            setYag(null)
            setEnerjikalori(null)
            setProtein(null)
        }





    }
    const onClose = () => {
        setModalVisible(false);
    };
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>


                <Text style={styles.titles}>İsim</Text>
                <TextInput
                    style={styles.inputs}
                    value={name}
                    onChangeText={setName}
                    maxLength={50}
                    placeholder='Name'
                    numberOfLines={1}

                />
                <Text style={styles.titles}>Detay</Text>
                <TextInput
                    style={styles.inputs}
                    value={description}
                    onChangeText={setDescription}
                    maxLength={50}
                    placeholder='Description'
                    numberOfLines={3}


                />
                <Text style={styles.titles}>Karbonhidrat</Text>
                <TextInput
                    style={styles.inputs}
                    value={karbonhidrat}
                    onChangeText={setKarbonhidrat}
                    maxLength={5}
                    placeholder='Karbonhidrat'
                    numberOfLines={1}
                    keyboardType='number-pad'
                />
                <Text style={styles.titles}>Şeker</Text>
                <TextInput
                    style={styles.inputs}
                    value={seker}
                    onChangeText={setSeker}
                    maxLength={5}
                    placeholder='Seker'
                    numberOfLines={1}
                    keyboardType='number-pad'
                />
                <Text style={styles.titles}>Yağ</Text>
                <TextInput
                    style={styles.inputs}
                    value={yag}
                    onChangeText={setYag}
                    maxLength={5}
                    placeholder='Yag'
                    numberOfLines={1}
                    keyboardType='number-pad'
                />
                <Text style={styles.titles}>Enerji Kilo Kalori</Text>
                <TextInput
                    style={styles.inputs}
                    value={enerjikalori}
                    onChangeText={setEnerjikalori}
                    maxLength={5}
                    placeholder='Enerjikalori'
                    numberOfLines={1}
                    keyboardType='number-pad'
                />
                <Text style={styles.titles}>Protein</Text>
                <TextInput
                    style={styles.inputs}
                    value={protein}
                    onChangeText={setProtein}
                    maxLength={5}
                    placeholder='Protein'
                    numberOfLines={1}
                    keyboardType='number-pad'
                />
                <TouchableOpacity style={styles.submit} onPress={handleDiet}>
                    <Text style={styles.submitText}>Gönder</Text>
                </TouchableOpacity>
                {modalVisible && <DateModal
                    isVisible={modalVisible}
                    onClose={onClose}
                    diet={value}
                />}
            </View>
        </ScrollView>
    )
}

export default CreateDiet
