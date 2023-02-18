import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import CategoryScreen from './screens/CategoryScreen';
import OverviewScreen from './screens/OverviewScreen';
import DetailScreen from './screens/DetailScreen';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoritesScreen from './screens/FavoritesScreen';

// Create a stack navigator.
const Stack = createNativeStackNavigator();
// Create a drawer navigator.
const Drawer = createDrawerNavigator();

// Setup a drawer navigator component function.
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={
        {
          headerTintColor: 'white', // The header's text color.
          headerStyle: { backgroundColor: 'crimson' }, // The header's background color.
          contentStyle: { backgroundColor: 'white' }, // The main content's background color.
          // The background color of the active drawer element.
          drawerActiveBackgroundColor: "crimson",
          // The text color of the active drawer element.
          drawerActiveTintColor: "white"
        }
      }
    >
      <Drawer.Screen name="Categories" component={CategoryScreen} />
      <Drawer.Screen name="Favorites" component={FavoritesScreen} />
    </Drawer.Navigator>
  )
}

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
            name="Drawer" 
            component={DrawerNavigator} 
            options={{
              headerShown: false
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

