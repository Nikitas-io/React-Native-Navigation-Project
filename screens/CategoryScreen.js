import { FlatList, StyleSheet } from 'react-native';

import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data';

function renderCategoryItem (data) {
    return (
        <CategoryGridTile title={data.item.title} color={data.item.color} />
    )
}

function CategoryScreen () {
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