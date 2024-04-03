import {
  View,
  Text,
  StyleSheet,
  Image,
  Platform,
  Pressable,
} from "react-native";

const MealItem = ({
  title,
  ingredients,
  duration,
  complexity,
  affordability,
  imageUrl,
}) => {
  return (
    <View style={styles.maelContainer}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
      >
        <View>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View>
          <Image style={styles.image} source={{ uri: imageUrl }} />
        </View>
        <View>
          <Text style={styles.info}>{ingredients}</Text>
          <Text style={styles.info}> {duration} minutes</Text>
          <Text style={styles.info}>{complexity.toUpperCase()}</Text>
          <Text style={styles.info}>{affordability.toUpperCase()}</Text>
        </View>
      </Pressable>
    </View>
  );
};
export default MealItem;
const styles = StyleSheet.create({
  maelContainer: {
    flex: 1,
    borderRadius: 6,
    elevation: 4,
    shadowOpacity: 0.25,
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    marginBottom: 12,
    backgroundColor: "white",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonPressed: {
    opacity: 0.6,
  },
  image: {
    width: "100%",
    height: 200,
    marginTop: 10,
    marginBottom: 10,
  },
  info: {
    textAlign: "center",
    padding: 6,
  },
});
