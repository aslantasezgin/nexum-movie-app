
import { createSlice } from "@reduxjs/toolkit";

const WatchListSlice = createSlice({
    name:"WatchListSlice",
    initialState:{
    watchList:[]
    },
    reducers:{
    setWatchList:(state, action) => {
       state.watchList=action.payload
    }
    }
})

export const {setWatchList}=WatchListSlice.actions
export default WatchListSlice.reducer