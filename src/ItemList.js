import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { navigationPropTypes } from './commonPropTypes';

const items = [
  { name: 'one' },
  { name: 'two' },
  { name: 'three' },
  { name: 'four' },
];

const ItemList = ({ navigation }) => {
  const handleItemPress = (item) => {
    navigation.navigate('Item', { title: item.name });
  };

  const renderItem = (item, i) => {
    return (
      <TouchableOpacity
        key={i}
        style={styles.item}
        onPress={() => handleItemPress(item)}
      >
        <Text style={styles.itemText}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>A StackNavigator!</Text>
      {items.map(renderItem)}
    </View>
  );
};

ItemList.propTypes = navigationPropTypes;

export default ItemList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2980b9',
    padding: 20,
  },
  text: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
  },
  item: {
    padding: 10,
  },
  itemText: {
    color: 'white',
    fontSize: 20,
  },
});
