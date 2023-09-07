import { Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from "./DietCard.style"

const DietCard = ({ data, onRemove }) => {
    console.log("dönen diertcard name", data.date)
    return (
        <View style={styles.container}>
            <Text style={styles.name}>İsim: {data.name}</Text>
            <Text style={styles.description}>Detay: {data.description}</Text>
            <View style={styles.degerlerContainer}>
                <Text style={styles.degerler}>Karbonhidrat: {data.karbonhidrat}</Text>
                <Text style={styles.degerler}>Şeker: {data.seker}</Text>
                <Text style={styles.degerler}>Yağ: {data.yag}</Text>
                <Text style={styles.degerler}>Enerji Kilo Kalori: {data.enerjikalori}</Text>
                <Text style={styles.degerler}>Protein: {data.protein}</Text>
            </View>
            <Text style={styles.delete}>Tarih: {data.date}</Text>
            <TouchableOpacity onPress={onRemove} >
                <Text style={styles.delete}>Sil</Text>
            </TouchableOpacity>
        </View>
    )
}

export default DietCard
