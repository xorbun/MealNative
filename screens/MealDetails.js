import { Text,Image, View,StyleSheet,Platform } from "react-native"
const MealDetails=({route})=>{
    const title=route.params.title
    const image=route.params.image
    const ingredients=route.params.ingredients
    return(
        <View style={styles.maelContainer}> 
            <View style={styles.card}>
                <Text style={styles.title}>{title}</Text>
                <Image style={styles.image} source={{ uri: image }} />
                <Text style={styles.ingredients}>{ingredients}</Text>
            </View>
        </View>
    )
}
export default MealDetails
const styles=StyleSheet.create({
    maelContainer: {
        borderRadius: 6,
        elevation: 4,
        shadowOpacity: 0.25,
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 8,
        overflow: Platform.OS === "android" ? "hidden" : "visible",
        marginHorizontal: 28,
       
        backgroundColor: "white",
      },
      card:{
        alignItems:'center',
        padding:12,
      },
      title:{
        fontSize:20,
        fontWeight:'bold'
      },
      ingredients:{
        fontSize:15
      },
    image: {
        width: "100%",
        height: 200,
        marginTop: 10,
        marginBottom: 10,
      },
})