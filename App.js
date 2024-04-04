import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import CategorieScreen from "./screens/CategoryScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetails from "./screens/MealDetails";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerStyle:{backgroundColor:'#FBC02D'},
          headerTintColor:'white',
          contentStyle:{backgroundColor:'#FFF9C4'}}}>
          <Stack.Screen name="CategoryScreen" component={CategorieScreen} options={{title:'Categories',
          }}/>
          <Stack.Screen name="MealOverview" component={MealsOverviewScreen} options={({route,navigation})=>{
            const titleId=route.params.categoryTitle;
            return {title:titleId}}}/>
            <Stack.Screen name="MealDetails" component={MealDetails} options={{title:'Details'}}/>
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
