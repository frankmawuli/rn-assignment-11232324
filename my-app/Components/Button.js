import { View, Text, Image ,TouchableOpacity} from 'react-native'
import React from 'react'

export default function Button() {
  return (
    <TouchableOpacity onPress={()=> addToCart(item)}>

        <Image source={require("../assets/../assets/add_circle.png")}/>

    </TouchableOpacity>
    
  )
}