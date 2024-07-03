import { View, Text , Image, StyleSheet,TouchableOpacity} from 'react-native'
import React from 'react'

export default function SmallBar(props) {
    function handlePress(){
        props.navigation.navigate('Cart')
    }
  return (
    <>
    <View  style = {styles.container}>
        <Image source={require("../assets/Menu.png")}/>
        <Image source = {require('../assets/Logo.png')}/>
        <View style = {{flexDirection:'row', gap:5}}>
            <Image source={require('../assets/Search.png')}/>
        <TouchableOpacity onPress={handlePress}>
            <Image source={require('../assets/shoppingBag.png')}/>

        </TouchableOpacity>
        </View>
        
    </View>
    <View style = {{flexDirection:'row' , alignItems:'center', justifyContent:'space-between'}}>
        <Text>OUR STORY</Text>
        <View style ={{flexDirection: 'row', gap:5}}>
            <Image source={require('../assets/Listview.png')}/>
            <Image source={require('../assets/Filter.png')}/>

        
        </View>

    </View>
    
    
    </>
    
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        alignItems: 'center'
    }

})