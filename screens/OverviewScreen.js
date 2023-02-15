import { View, Text, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";

function OverviewScreen () {
    return (
        <View style={styles.container}>
            <Text>Meal Overview Screen works!</Text>
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