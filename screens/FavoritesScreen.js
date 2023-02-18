import { useContext } from 'react';
import { Text } from 'react-native';
import { FavoritesContext } from '../store/context/favorites-context';
import { MEALS } from '../data/dummy-data';
import MealList from '../components/MealList';

function FavoritesScreen() {
  // Get the favorites context.
  const favoriteMealsContext = useContext(FavoritesContext);
  // Fetch the favorite meals from the data, using the Ids stored in context.
  const favoriteMeals = MEALS.filter((meal) => favoriteMealsContext.ids.includes(meal.id));

  return <MealList items={favoriteMeals} />;
}

export default FavoritesScreen;