import { createSlice } from "@reduxjs/toolkit";

// The state slice object needed to define the favorites data 
// as well as the actions needed to change that data.
const favoritesSlice = createSlice({
    name: "favorites", // An identifier for the slice. 
    initialState: {
        ids: []
    },
    // Reducers are functions used to change the state.
    reducers: {
        addFavorite: (state, action) => { 
            state.ids.push(action.payload.id)
        },
        removeFavorite: (state) => {
            state.ids.splice(state.ids.indexOf(action.payload.id), 1);
        }
    }
});

// Export the necessary actions.
export const addFavorite = favoritesSlice.actions.addFavorite;
export const removeFavorite = favoritesSlice.actions.removeFavorite;

// Export the reducer of the slice.
export default favoritesSlice.reducer;