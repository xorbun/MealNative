import { FlatList, StyleSheet } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

const CategorieScreen = ({ navigation }) => {
  const renderCategoryItem = (itemData) => {
    const pressHandler = () => {
      navigation.navigate("MealOverview", {
        categoryId: itemData.item.id,
      });
    };
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  };

  return (
    <FlatList
      style={styles.container}
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};
export default CategorieScreen;
const styles = StyleSheet.create({
  container: {},
});
