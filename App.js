import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import CategorieScreen from "./screens/CategoryScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetails from "./screens/MealDetails";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoriteScreen from "./screens/FavoriteScreen";
import { Ionicons,FontAwesome } from '@expo/vector-icons';
import {Provider} from 'react-redux';
import { store } from "./store/redux/store";
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "#FBC02D" },
      headerTintColor: "white",
      sceneContainerStyle: { backgroundColor: "#FFF9C4" },drawerContentStyle: { backgroundColor: '#FBC02D' },drawerInactiveTintColor:'white',drawerActiveTintColor:'#FFF9C4'
    }}
    >
      <Drawer.Screen name="Categories" component={CategorieScreen} options={{drawerIcon:()=><Ionicons name="library-outline" size={24} color="white" />}}/>
      <Drawer.Screen name="Favorite" component={FavoriteScreen} options={{drawerIcon:()=><FontAwesome name="star" size={24} color="white" />}} />
    </Drawer.Navigator>
  );
};
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#FBC02D" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#FFF9C4" },
          }}
        >
          <Stack.Screen
            name="CategoryScreen"
            component={DrawerNavigator}
            options={{title:'Categories',headerShown:false }}
          />
          <Stack.Screen
            name="MealOverview"
            component={MealsOverviewScreen}
            options={({ route, navigation }) => {
              const titleId = route.params.categoryTitle;
              return { title: titleId };
            }}
          />
          <Stack.Screen
            name="MealDetails"
            component={MealDetails}
            options={{ title: "Details" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: "white",
  },
});
