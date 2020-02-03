import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { navigationPropTypes } from './commonPropTypes';

const Item = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {`Item # ${navigation.state.params.title}`}
      </Text>
    </View>
  );
};

Item.propTypes = navigationPropTypes;

export default Item;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#c0392b',
    padding: 20,
  },
  text: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  },
});
