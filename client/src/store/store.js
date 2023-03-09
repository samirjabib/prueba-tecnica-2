import { configureStore } from "@reduxjs/toolkit";

import { businessApi } from "./api";
import {  authSlice} from './slices'


export const store = configureStore({
    reducer:{
        auth:authSlice.reducer,
        [businessApi.reducerPath] : businessApi.reducer,        
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware()
        .concat ( businessApi.middleware )
});