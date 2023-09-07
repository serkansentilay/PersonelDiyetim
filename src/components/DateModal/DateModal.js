import { Text, View, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import DatePicker from 'react-native-date-picker';
import Modal from 'react-native-modal';
import { format } from 'date-fns';
import { useDispatch, useSelector } from 'react-redux'
import { addDiet } from '../../context/AsyncDietContext/AsyncDietSlice'


const DateModal = ({ isVisible, onClose, diet }) => {
    const [date, setDate] = useState(new Date());
    const dispatch = useDispatch()
    console.log("gelendegerler modala", isVisible, onClose, diet)

    const handleSaveDiet = () => {
        if (!date) {
            console.log("date yok")
            return
        }
        const formattedDate = format(date, "yyyy-MM-dd HH:mm:ss")
        console.log("kaydedilecek formattedDate deger", formattedDate)
        diet.date = formattedDate
        console.log("kaydedilecek value deger", diet)

        dispatch(addDiet(diet))
        Alert.alert("Successfuly", "Diet is added the programs")
        onClose()
    }

    return (
        <View>
            {isVisible && (
                <Modal
                    isVisible={isVisible}
                    onBackButtonPress={onClose}
                    onBackdropPress={onClose}
                    swipeDirection={'down'}
                    onSwipeComplete={onClose}
                >
                    <DatePicker date={date} onDateChange={setDate} mode='datetime' />
                    <TouchableOpacity onPress={handleSaveDiet}>
                        <Text style={{ fontSize: 20, color: 'green' }}>Kaydet</Text>
                    </TouchableOpacity>
                </Modal>
            )}

        </View>
    )
}

export default DateModal
