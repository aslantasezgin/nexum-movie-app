
import { createSlice } from "@reduxjs/toolkit";

const FavoritesSlice = createSlice({
    name:"FavoritesSlice",
    initialState:{
    favorites:[]
    },
    reducers:{
    setFavorites:(state, action) => {
       state.favorites=action.payload
    }
    }
})

export const {setFavorites}=FavoritesSlice.actions
export default FavoritesSlice.reducer