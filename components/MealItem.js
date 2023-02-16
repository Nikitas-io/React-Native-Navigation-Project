import { StyleSheet, View, Text } from "react-native";

function MealItem ({title}) {
    return (
        <View>
            <Text>{title}</Text>
        </View>
    );
}

export default MealItem;

const styles = StyleSheet.create({

})