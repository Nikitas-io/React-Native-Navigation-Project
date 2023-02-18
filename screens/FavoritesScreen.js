import { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FavoritesContext } from '../store/context/favorites-context';
import { MEALS } from '../data/dummy-data';
import MealList from '../components/MealList';

function FavoritesScreen() {
  // Get the favorites context.
  const favoriteMealsContext = useContext(FavoritesContext);
  // Fetch the favorite meals from the data, using the Ids stored in context.
  const favoriteMeals = MEALS.filter((meal) => favoriteMealsContext.ids.includes(meal.id));


  if(favoriteMeals.length === 0) { 
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    )
  }

  return <MealList items={favoriteMeals} />;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'crimson',
  },
});