import { StyleSheet } from 'react-native';
import CategoryScreen from './screens/CategoryScreen';

export default function App() {
  return (
    <CategoryScreen />
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
