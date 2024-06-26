import { View,FlatList,StyleSheet } from "react-native"
import { MEALS } from "../data/dummy-data";
import {useSelector} from 'react-redux'
import MealItem from "../components/MealItem";
const FavoriteScreen=({route,navigation})=>{
const favoriteMealsId=useSelector((state)=>state.favoriteMeals.Ids)
const filterMeals=MEALS.filter((meal)=>favoriteMealsId.includes(meal.id))
const renderMeal = (itemData) => {
    const item = itemData.item;
    const mealItemProps = {
      title: item.title,
      ingredients: item.ingredients,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
      imageUrl: item.imageUrl,
    }
    const DetailHandler = () => {
        navigation.navigate("MealDetails", {
          id:itemData.item.id,
          title: itemData.item.title,
          ingredients: itemData.item.ingredients,
          image: itemData.item.imageUrl,
          steps: itemData.item.steps,
        });
      };
    return <MealItem {...mealItemProps} onPress={DetailHandler}/>;
}
return (
    <View style={styles.container}>
      <FlatList
        data={filterMeals}
        renderItem={renderMeal}
        keyExtractor={(item) => {
         return item.id;
        }}
      />
    </View>
  );
}
export default FavoriteScreen
const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin: 16,
      textAlign:'center'
    },
    text: {
      fontSize: 30,
      fontWeight: "bold",
    },
  });