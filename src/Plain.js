import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Button } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

import { drawerNavigationPropTypes } from './commonPropTypes';

const Plain = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.content}>
        <Text style={styles.text}>Plain old component</Text>
        <TouchableOpacity
          style={styles.touchable}
          onPress={navigation.toggleDrawer}
        >
          <Text style={styles.touchText}>Open Drawer</Text>
        </TouchableOpacity>
        <Button
          mode="contained"
          onPress={() => navigation.navigate('Modal')}
          contentStyle={styles.buttonContent}
          labelStyle={styles.buttonText}
          style={styles.button}
        >
          Modal
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default Plain;

Plain.propTypes = drawerNavigationPropTypes;

const styles = StyleSheet.create({
  button: {
    marginVertical: 10,
  },
  buttonContent: {
    backgroundColor: '#dedede',
  },
  buttonText: {
    color: '#16a085',
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 1.25,
  },
  root: {
    backgroundColor: '#16a085',
    // backgroundColor: '#fff',
    flex: 1,
    width: '100%',
  },
  content: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    color: '#fff',
    // color: '#16a085',
    fontSize: 28,
    fontWeight: 'bold',
  },
  touchable: {
    alignItems: 'center',
    backgroundColor: '#f39c12',
    height: 50,
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    top: 30,
    width: 150,
  },
  touchText: {
    color: '#fff',
    // color: '#16a085',
  },
});
