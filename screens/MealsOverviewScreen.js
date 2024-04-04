import MealItem from "../components/MealItem";
import { MEALS } from "../data/dummy-data";

import { View, StyleSheet, FlatList } from "react-native";
const MealsOverviewScreen = ({ route, navigation }) => {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });
  const renderMeal = (itemData) => {
    const item = itemData.item;
    const mealItemProps = {
      title: item.title,
      ingredients: item.ingredients,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
      imageUrl: item.imageUrl,
    };
    const DetailHandler = () => {
      navigation.navigate("MealDetails", {
        id:itemData.item.id,
        title: itemData.item.title,
        ingredients: itemData.item.ingredients,
        image: itemData.item.imageUrl,
        steps: itemData.item.steps,
      });
    };
    return <MealItem {...mealItemProps} onPress={DetailHandler} />;
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        renderItem={renderMeal}
        keyExtractor={(item) => {
          item.id;
        }}
      />
    </View>
  );
};
export default MealsOverviewScreen;

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
