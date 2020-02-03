import React from 'react';
import { StatusBar, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from 'react-native-paper';
import { navigationPropTypes } from './commonPropTypes';

const TabA = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.text}>Tab A</Text>
        <Button
          onPress={() => navigation.navigate('TabB')}
          labelStyle={styles.button}
        >
          Next
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
};

TabA.navigationOptions = { title: 'Tab A' };
TabA.propTypes = navigationPropTypes;
export default TabA;

const styles = StyleSheet.create({
  button: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 1.25,
  },
  root: {
    backgroundColor: '#4caf50',
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
