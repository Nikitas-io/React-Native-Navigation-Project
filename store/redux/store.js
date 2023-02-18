import { configureStore } from "@reduxjs/toolkit";

import favoritesReducer from './favorites'

// Create and export a Redux store.
export const store = configureStore({
    // Reducers are the different slices of state
    reducer: {
        favoriteMeals: favoritesReducer
    }
});