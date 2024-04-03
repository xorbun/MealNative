import { View,Text,StyleSheet } from "react-native"

const MealItem=({title})=>{
 return(
    <View>
        <Text style={styles.text}>{title}</Text>
    </View>
 )
}
export default MealItem
const styles=StyleSheet.create({
    text:{
        fontSize:20,
        fontWeight:'bold'
    },
})