import { View, StyleSheet, FlatList } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useLayoutEffect } from "react";
import MealList from "../components/MealList";

function OverviewScreen ({ route, navigation }) {

    // We need to set the options within the useLayoutEffect hook.
    useLayoutEffect(() => {
        // Set the navigation title.
        navigation.setOptions({
            title: route.params.title
        });
    }, [navigation, route.params.title])


    // Get the category ID of the selected category.
    const categoryId = route.params.categoryId;

    // Filter the meals that should be displayed on the screen.
    const displayedMeals = MEALS.filter((mealItem) => {
        // indexOf() returns the position of the first occurrence of a value in a string.
        // Return true if a meal has this category ID, in its array of category IDs.
        return mealItem.categoryIds.indexOf(categoryId) >= 0;
    });

    return <MealList items={displayedMeals} />
}

export default OverviewScreen;