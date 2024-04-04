import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import CategorieScreen from "./screens/CategoryScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerStyle:{backgroundColor:'#351401'},
          headerTintColor:'white',
          contentStyle:{backgroundColor:'#3f2f25'}}}>
          <Stack.Screen name="CategoryScreen" component={CategorieScreen} options={{title:'categorie',
          }}/>
          <Stack.Screen name="MealOverview" component={MealsOverviewScreen} options={({route,navigation})=>{
            const titleId=route.params.categoryTitle;
            return {title:titleId}}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
});
