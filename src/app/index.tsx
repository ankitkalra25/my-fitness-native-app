import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FoodListItem from '../components/FoodListItem';

export default function App() {
  return (
    <View style={styles.container}>
      <FoodListItem item={{label:'Pizza', cal:75, brand:'Domino'}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding:10,
    justifyContent: 'center',
  },
});
