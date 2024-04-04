import { Pressable,StyleSheet } from "react-native"
import { FontAwesome } from '@expo/vector-icons';
const IconButton=({onPress,name})=>{
    return(
        <Pressable onPress={onPress} style={({pressed})=> pressed ? styles.pressed:null}> 
            <FontAwesome name={name} size={24} color="white" />
        </Pressable>
    )
}
export default IconButton
const styles=StyleSheet.create({
    pressed:{
        opacity:0.7
    }
})