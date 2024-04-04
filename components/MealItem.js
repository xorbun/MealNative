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
  duration,
  complexity,
  affordability,
  imageUrl,
  onPress,
}) => {
  return (
    <View style={styles.maelContainer}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={onPress}
      >
        <View>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View>
          <Image style={styles.image} source={{ uri: imageUrl }} />
        </View>
        <View style={styles.info}>
          <View style={styles.grouppedinfo}>
            <Text style={styles.desc}>DURAB.</Text>
            <Text style={styles.text}> {duration} minutes</Text>
          </View>
          <View style={styles.grouppedinfo}>
            <Text style={styles.desc}>COMPLEX.</Text>
            <Text style={styles.text}>{complexity.toUpperCase()}</Text>
          </View>
          <View style={styles.grouppedinfo}>
            <Text style={styles.desc}>AFFORD.</Text>
            <Text style={styles.text}>{affordability.toUpperCase()}</Text>
          </View>
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
    flexDirection: "row",
    justifyContent: "center",
  },
  text: {
    
    fontWeight: "300",
  },
  desc: {
    fontWeight: "bold",
  },
  grouppedinfo: {
    margin: 12,
    
  },
});
