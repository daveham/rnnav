import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

import { navigationPropTypes } from './commonPropTypes';

const Modal = ({ navigation }) => {
  const handlePress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Button
        contentStyle={styles.buttonContent}
        labelStyle={styles.buttonText}
        mode="contained"
        onPress={handlePress}
        style={styles.button}
      >
        Button One
      </Button>
      <Button
        contentStyle={styles.buttonContent}
        labelStyle={styles.buttonText}
        mode="contained"
        onPress={handlePress}
        style={styles.button}
      >
        Button Two
      </Button>
      <Button
        contentStyle={styles.buttonContent}
        labelStyle={styles.buttonText}
        mode="contained"
        onPress={handlePress}
        style={styles.button}
      >
        Button Three
      </Button>
    </View>
  );
};

Modal.propTypes = navigationPropTypes;

export default Modal;

const styles = StyleSheet.create({
  button: {
    marginVertical: 4,
    width: '100%',
  },
  buttonContent: {
    backgroundColor: '#dedede',
    padding: 6,
  },
  buttonText: {
    color: '#16a085',
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 1.25,
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 50,
    paddingHorizontal: 30,
    width: '100%',
  },
  text: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
  },
});
