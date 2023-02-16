import { View, Pressable, Text, StyleSheet, Platform } from "react-native";

function CategoryGridTile({title, color, buttonPressed}) {

    return (
        <View style={styles.gridItem}>
            <Pressable 
                android_ripple={{color: "#ccc"}} 
                style={({pressed}) => [
                    styles.button,
                    (pressed) ? styles.buttonPressed : null
                ]}
                onPress={buttonPressed}
            >
                <View style={[styles.innerContainer, {backgroundColor: color}]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
}

export default CategoryGridTile;

const styles = StyleSheet.create({ 
    gridItem: {
        flex: 1, // Each item should take up all the available width it can get.
        height: 150, // Each item should be 150px tall.
        borderRadius: 8,
        backgroundColor: 'white', // You need a background to apply a border radius and a ripple effect to the grid item.
        // Use overflow 'hidden' to make sure that the ripple effect on android does not go beyond the rounded corners.
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible', 
        margin: 10,
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
    },
    button: {
        flex: 1
    },
    buttonPressed: {
        opacity: 0.8
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16
    }
})