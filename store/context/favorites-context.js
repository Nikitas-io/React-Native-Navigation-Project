import { createContext } from "react";

// Export a constant to help us with context autocompletion in other files.
export const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => {},
    removeFavorite: (id) => {}
});

function FavouritesContextProvider({children}) {
    return (
        <FavoritesContext.Provider>{children}</FavoritesContext.Provider>
    )
}

export default FavouritesContextProvider