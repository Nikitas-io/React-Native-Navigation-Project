import { createContext, useState } from "react";

// Export a constant to help us with context autocompletion in other files.
export const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => {},
    removeFavorite: (id) => {}
});

function FavouritesContextProvider({children}) {

    // State to manage the favorite meals.
    const [favoriteMealIds, setFavoriteMealIds] = useState([]);

    // Add a new item to the favorite meals.
    function addFavorite(id) {
        setFavoriteMealIds((currentFavIds) => [...currentFavIds, id]);
    }

    // Remove an item from the favorite meals.
    function removeFavorite(id) {
        setFavoriteMealIds((currentFavIds) => currentFavIds.filter((mealId) => mealId !== id))
    }

    // Create a value prop that will allow the compoments wrapped by this context to access
    // its properties.
    const value = {
        ids: favoriteMealIds,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite
    }

    return (
        <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
    )
}

export default FavouritesContextProvider