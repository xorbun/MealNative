import { Pressable,StyleSheet } from "react-native"
import { FontAwesome } from '@expo/vector-icons';
const IconButton=({onPress})=>{
    return(
        <Pressable onPress={onPress} style={({pressed})=> pressed ? styles.pressed:null}> 
            <FontAwesome name="star" size={24} color="white" />
        </Pressable>
    )
}
export default IconButton
const styles=StyleSheet.create({
    pressed:{
        opacity:0.7
    }
})