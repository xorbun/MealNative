import MealItem from "../components/MealItem";
import { MEALS } from "../data/dummy-data";

import { View, StyleSheet,FlatList } from "react-native";
const MealsOverviewScreen = ({ route }) => {
  const catId = route.params.categoryId;
  

  const displayedMeals=MEALS.filter((mealItem)=>{
    return mealItem.categoryIds.indexOf(catId)>=0
  });
  const renderMeal=(itemData)=>{
        return(
            <MealItem title={itemData.item.title}/>
        )
  }
  return (
    <View style={styles.container}>
      <FlatList data={displayedMeals} renderItem={renderMeal} keyExtractor={(item)=>{item.id}}/>
    </View>
  );
};
export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    fontWeight:'bold',
  },
});
