import { Text, SafeAreaView, View, FlatList } from 'react-native'
import React, { useEffect, useState, } from 'react'
import styles from "./Home.style"
import DietCard from '../../components/DietCard/DietCard'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useSelector, useDispatch } from 'react-redux'
import { removeDiet, DietList } from "../../context/AsyncDietContext/AsyncDietSlice"

const Home = () => {
    const dispatch = useDispatch()
    const { dietList, } = useSelector(st => st.dietLists)

    useEffect(() => {
        dispatch(DietList())
        console.log("HOME useeeffecy dispatch çalıştı")
    }, [])

    const handleRemove = (name) => {
        dispatch(removeDiet(name))
    }

    const renderDiet = ({ item }) => <DietCard data={item} onRemove={() => handleRemove(item.name)} />


    return (
        <>
            {dietList ? <FlatList
                data={dietList}
                keyExtractor={(item, index) => index}
                renderItem={renderDiet}
            /> : <Text>not yet data</Text>
            }
        </>


    )
}

export default Home

