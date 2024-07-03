import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native'; // Import necessary components
import SmallBar from '../Components/SmallBar';
import { data } from '../Components/Data'; // Ensure correct path
import Card from '../Components/Card';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <SmallBar  navigation = {navigation}/>
      <FlatList
        data={data}
        renderItem={({ item }) => <Card {...item} />}
        keyExtractor={item => item.id.toString()}
        numColumns={2} // Display two items per row
        contentContainerStyle={styles.flatListContent} // Optional: for padding, centering, etc.
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Allow the container to expand to fill the screen
    paddingHorizontal: 10, // Optional: add padding
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  flatListContent: {
    paddingBottom: 10, // Optional: adjust padding for content
  },
});
