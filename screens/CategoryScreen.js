import { FlatList, StyleSheet } from 'react-native';

import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data';



function CategoryScreen ({navigation}) {

    // Render a flatlist item when needed.
    function renderCategoryItem (data) {

        // Called when the user selects a category item.
        function pressHandler() {
            // Navigate to the overview page of the selected item and pass in its id.
            navigation.navigate('Overview', {
                categoryId: data.item.id
            }); 
        }

        return (
            <CategoryGridTile 
                title={data.item.title} 
                color={data.item.color} 
                buttonPressed={pressHandler} 
            />
        )
    }

    return <FlatList 
        style={styles.screen}
        data={CATEGORIES} 
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={2} // Render the items in 2 columns.
    />
}

export default CategoryScreen;

const styles = StyleSheet.create({
    screen: {
        margin: 5
    } 
})