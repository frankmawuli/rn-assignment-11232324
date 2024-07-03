import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import Add from '../Components/Button';

export default function Card(props) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={props.image} style={styles.image} />
        <View style={styles.addButtonContainer}>
          <Add style={styles.addButton} />
        </View>
      </View>
      <Text style={styles.name}>{props.name}</Text>
      <Text style={styles.info}>{props.info}</Text>
      <Text style={styles.price}>${props.price}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
    width:170,
    
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 200,
  },
  addButtonContainer: {
    position: 'absolute',
    top: 170,
    left: 120,
  },
  addButton: {
    // Add any necessary styles for the "Add" button
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  info: {
    fontSize: 12,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'rgba(224,145,112,255)',
  },
});
