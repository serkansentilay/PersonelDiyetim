import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import AsyncStorage from "@react-native-async-storage/async-storage"

const initialState = {
    dietList: [],
    loading: false
}

export const DietList = createAsyncThunk("DietList", async () => {
    console.log("DİETLİST E GELDİ")
    const data = await AsyncStorage.getItem("dietList").then(st => JSON.parse(st))
    console.log("DİETLİST E BİTTİ")
    return data
})

export const AsyncDietSlice = createSlice({
    name: "diet",
    initialState,
    reducers: {
        addDiet: (state, action) => {
            console.log("gelen deger action.payload addDiet: ", action.payload)
            state.dietList.push(action.payload)
            AsyncStorage.setItem("dietList", JSON.stringify(state.dietList))
            console.log("olusan deger state.dietList addDiet: ", state.dietList)


        },
        removeDiet: (state, action) => {
            console.log("gelen deger action.payload removeDiet: ", action.payload)
            let findIndex = state.dietList.findIndex(object => {
                console.log("objec typ", object)
                return object.name === action.payload
            })
            console.log("findindex bakalım", findIndex)
            state.dietList.splice(findIndex, 1)
            AsyncStorage.setItem("dietList", JSON.stringify(state.dietList))
            console.log("olusan deger state.dietList removeDiet: ", state.dietList)


        }
    },
    extraReducers: (builder) => {
        builder.addCase(DietList.pending, state => {
            console.log("gelen deger extraReducers pending: ", state)
            state.loading = true
        })
        builder.addCase(DietList.fulfilled, (state, action) => {
            console.log("gelen deger extraReducers fulfilled: ", state)
            state.dietList = action.payload || []
            state.loading = false
            console.log("yükleme tamam", state.dietList)
            console.log("olusan deger extraReducers fulfilled: ", state)

        })
    }
})

export const { addDiet, removeDiet } = AsyncDietSlice.actions
export default AsyncDietSlice.reducer