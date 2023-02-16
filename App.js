import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import CategoryScreen from './screens/CategoryScreen';
import OverviewScreen from './screens/OverviewScreen';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailScreen from './screens/DetailScreen';

// Create a stack of screens.
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={
            {
              headerTintColor: 'white', // The header's text color.
              headerStyle: { backgroundColor: 'crimson' }, // The header's background color.
              contentStyle: { backgroundColor: 'white' } // The main content's background color.
            }
          }
        >
          {/* Screens managed by the stack navigator. */}
          <Stack.Screen 
            name="Categories" 
            component={CategoryScreen} 
            options={{
              title: 'Meal Categories',
            }}
          />
          <Stack.Screen 
            name="Overview" 
            component={OverviewScreen} 
          />
          <Stack.Screen
            name="Details" 
            component={DetailScreen} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
