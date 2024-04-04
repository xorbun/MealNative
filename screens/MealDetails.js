import { Text,Image, View,StyleSheet,Platform,ScrollView,Button} from "react-native"
import { useLayoutEffect } from "react"
const MealDetails=({route,navigation})=>{
    const title=route.params.title
    const image=route.params.image
    const ingredients=route.params.ingredients
    const steps=route.params.steps
    const buttonPressHandler=()=>{
        console.log(title)
    }
    useLayoutEffect(()=>{
        navigation.setOptions({headerRight:()=>{
            return <Button title="add to favorite"onPress={buttonPressHandler}/>
          }})
    },[navigation,buttonPressHandler]);
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
                {steps.map((step,index)=>(
                    <Text style={styles.steps} key={step}>{index+1}) {step}</Text>
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
        marginHorizontal: 16,
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
        fontSize:14,
        textAlign:'center',
       
      },
      steps:{
        marginBottom:8,
        padding:5,
        fontSize:14,
      },
    image: {
        width: "100%",
        height: 200,
        marginTop: 10,
        marginBottom: 10,
        borderRadius:6
      },
})