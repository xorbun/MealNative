import { Text,Image, View,StyleSheet,Platform,ScrollView } from "react-native"
const MealDetails=({route})=>{
    const title=route.params.title
    const image=route.params.image
    const ingredients=route.params.ingredients
    const steps=route.params.steps
    return(
        <ScrollView>
        <View style={styles.maelContainer}> 
            <View style={styles.card}>
                <Text style={styles.title}>{title}</Text>
                <Image style={styles.image} source={{ uri: image }} />
                <View style={styles.titleView}>
                <Text style={styles.title}>INGREDIENTS</Text>
                </View>
                {ingredients.map((ingred)=>(
                    <Text style={styles.ingredients} key={ingred}>{ingred}</Text>
                ))}
                <View style={styles.titleView}>
                <Text style={styles.title}>STEPS</Text>
                </View>
                {steps.map((step)=>(
                    <Text style={styles.steps} key={step}>-{step}</Text>
                ))}
            </View>
        </View>
        </ScrollView>
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
        marginTop:12,
        backgroundColor: "white",
      },
      card:{
        padding:12,
      },
      title:{
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center',
      },
      titleView:{
        borderBottomWidth:2,
        borderBottomColor:'#FBC02D',
        margin:12
      },
      ingredients:{
        fontSize:15,
        textAlign:'center',
       
      },
      steps:{
        marginBottom:8,
       
      },
    image: {
        width: "100%",
        height: 200,
        marginTop: 10,
        marginBottom: 10,
      },
})