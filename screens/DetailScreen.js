import { StyleSheet, Text, ScrollView, Image, View } from "react-native";
import MealDetails from "../components/MealDetails";
import { MEALS } from "../data/dummy-data";
import Subtitle from "../components/Subtitle";
import List from "../components/List";
import { useContext, useLayoutEffect } from "react";
import IconButton from "../components/IconButton";
import { FavoritesContext } from "../store/context/favorites-context";

function DetailScreen ({navigation, route}){

    // Get the meail id from the params.
    const mealId = route.params.mealId;
    // Get the selected meal item from the data.
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);
    
    // Fetch the favorites context.
    const favoriteMealsContext = useContext(FavoritesContext);
    // Find out if the selected meal is a favorite using context.
    const mealIsFavorite = favoriteMealsContext.ids.includes(mealId);

    function changeFavoriteStatus() {
      if(mealIsFavorite) {
        favoriteMealsContext.removeFavorite(mealId);
      } else {
        favoriteMealsContext.addFavorite(mealId);
      }
    }

    useLayoutEffect(() => {
      // Create a button on the top right corner of the header.
      navigation.setOptions({
        headerRight: () => {
          return <IconButton 
            icon={ mealIsFavorite ? "star" : "star-outline" }
            color="white" 
            buttonPressed={changeFavoriteStatus}
          />
        }
      })
      
    }, [navigation, changeFavoriteStatus]);

    return (
        <ScrollView style={styles.rootContainer}>
            <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails
                duration={selectedMeal.duration}
                complexity={selectedMeal.complexity}
                affordability={selectedMeal.affordability}
                textStyle={styles.detailText}
            />

            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List data={selectedMeal.ingredients} />
                    <Subtitle>Steps</Subtitle>
                    <List data={selectedMeal.steps} />
                </View>
            </View>
        </ScrollView>
    );
}

export default DetailScreen;

const styles = StyleSheet.create({
    rootContainer: {
      marginBottom: 32
    },
    image: {
      width: '100%',
      height: 350,
    },
    title: {
      fontWeight: 'bold',
      fontSize: 24,
      margin: 8,
      textAlign: 'center',
      color: 'black',
    },
    detailText: {
      color: 'black',
    },
    listOuterContainer: {
      alignItems: 'center',
    },
    listContainer: {
      width: '80%',
    }
  });