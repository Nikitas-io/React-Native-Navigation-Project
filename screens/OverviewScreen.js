import { View, StyleSheet, FlatList } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

function OverviewScreen ({ route }) {
    // Get the category ID of the selected category.
    const categoryId = route.params.categoryId;

    // Filter the meals that should be displayed on the screen.
    const displayedMeals = MEALS.filter((mealItem) => {
        // indexOf() returns the position of the first occurrence of a value in a string.
        // Return true if a meal has this category ID, in its array of category IDs.
        return mealItem.categoryIds.indexOf(categoryId) >= 0;
    });

    function renderMealItem(data) {

        const item = data.item;
        
        const mealItemProps = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            affordability: item.affordability,
            complexity: item.complexity,
            duration: item.duration,
        };

        return (
            <MealItem {...mealItemProps}/>
        )
    }
    
    return (
        <View style={styles.container}>
            <FlatList 
                data={displayedMeals} 
                keyExtractor={(item) => item.id} 
                renderItem={renderMealItem} 
            />
        </View>
    )
}

export default OverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})