import { configureStore } from "@reduxjs/toolkit";
import AsyncDietReducer from "./AsyncDietContext/AsyncDietSlice";

export default configureStore({
    reducer: {
        dietLists: AsyncDietReducer
    }
})