import { View, Text, FlatList, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const fetchCartItems = async () => {
    try {
        const cart = await AsyncStorage.getItem('cart');
        return cart ? JSON.parse(cart) : [];
    } catch (error) {
        console.error(error);
        return [];
    }
};

export default function Checkout() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const loadCartItems = async () => {
            const items = await fetchCartItems();
            setCartItems(items);
        };

        loadCartItems();
    }, []);

    return (
        <View style={{ marginTop: 20 }}>
            <Text>Checkout</Text>
            <FlatList
                data={cartItems}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Image source={item.image} style={styles.image} />
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.info}>{item.info}</Text>
                        <Text style={styles.price}>${item.price}</Text>
                    </View>
                )}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    info: {
        fontSize: 14,
        color: '#555',
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'rgba(224,145,112,255)',
    },
});
