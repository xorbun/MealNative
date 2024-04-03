import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View } from 'react-native';
import CategorieScreen from './screens/CategoryScreen';




export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
     <CategorieScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:35,
  },
});
