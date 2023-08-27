import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/lib/persistReducer";


import FavoritesSlice from "./FavoritesSlice/FavoritesSlice";
import persistStore from "redux-persist/es/persistStore";
import WatchListSlice from "./WatchListSlice/WatchListSlice";


const rootReducer = combineReducers({

    favorites:FavoritesSlice,
    watchList:WatchListSlice

})

const persistConfig ={
    key:'root',
    version:1,
    storage,
    whitelist:['favorites', 'watchList']
}


const persistedReducer = persistReducer(persistConfig,rootReducer)
const store= configureStore({
    reducer:persistedReducer,
})

const persistor= persistStore(store)
export default store
export {persistor}