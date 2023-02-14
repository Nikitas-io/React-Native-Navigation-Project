import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data';

import { FlatList } from 'react-native';

function renderCategoryItem (data) {
    return (
        <CategoryGridTile title={data.item.title} color={data.item.color} />
    )
}

function CategoryScreen () {
    return <FlatList 
        data={CATEGORIES} 
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
    />
}

export default CategoryScreen;