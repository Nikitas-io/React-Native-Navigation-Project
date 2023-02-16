import { StyleSheet, Text, ScrollView, Image } from "react-native";
import MealDetails from "../components/MealDetails";
import { MEALS } from "../data/dummy-data";

function DetailScreen ({route}){
    // Get the meail id from the params.
    const mealId = route.params.mealId;
    // Get the selected meal item from the data.
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);
    console.log('The selected meal: ', selectedMeal);

    return (
        <ScrollView style={styles.rootContainer}>
            {/* <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} /> */}
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails
                duration={selectedMeal.duration}
                complexity={selectedMeal.complexity}
                affordability={selectedMeal.affordability}
                textStyle={styles.detailText}
            />
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
      color: 'white',
    },
    detailText: {
      color: 'white',
    },
    listOuterContainer: {
      alignItems: 'center',
    },
    listContainer: {
      width: '80%',
    },
  });