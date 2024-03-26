import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./slices/apiSlice";


const store = configureStore({  // create a store
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer, // add the apiSlice reducer
    }, // define reducers

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware), // add the apiSlice middleware
    devTools: true, // enable Redux DevTools

});

export default store; // export the store

