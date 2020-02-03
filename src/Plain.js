import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { drawerNavigationPropTypes } from './commonPropTypes';

const Plain = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Plain old component</Text>
      <TouchableOpacity style={styles.button} onPress={navigation.toggleDrawer}>
        <Text style={styles.buttonText}>Open Drawer</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Plain;

Plain.propTypes = drawerNavigationPropTypes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#16a085',
    padding: 20,
  },
  text: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
  },
  button: {
    position: 'absolute',
    top: 50,
    left: 0,
    width: 150,
    height: 50,
    backgroundColor: '#f39c12',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
  },
});
