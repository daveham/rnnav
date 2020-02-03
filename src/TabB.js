import React from 'react';
import { StatusBar, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from 'react-native-paper';
import { navigationPropTypes } from './commonPropTypes';

const TabB = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.text}>Tab B</Text>
        <Button
          onPress={() => navigation.navigate('TabC')}
          labelStyle={styles.button}
        >
          Next
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
};

TabB.navigationOptions = { title: 'Tab B' };
TabB.propTypes = navigationPropTypes;
export default TabB;

const styles = StyleSheet.create({
  button: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 1.25,
  },
  root: {
    backgroundColor: '#8e44ad',
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
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  },
});
