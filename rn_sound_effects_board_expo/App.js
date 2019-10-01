import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Board from './src/components/Board';

const platformString = Platform.select({
  ios: 'iOS',
  android: 'Android'
});

function App() {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <View style={styles.topBarContent}>
          <Text style={styles.title}>deTECH {platformString} Sound Effects Board</Text>
        </View>
      </View>
      <View style={styles.main}>
        <Board />
      </View>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    alignItems: 'stretch'
  },
  topBar: {
    height: 90,
    paddingTop: 40,
    backgroundColor: 'white',
    alignItems: 'center'
  },
  topBarContent: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  main: {
    flex: 1,
    backgroundColor: '#999',
    alignItems: 'stretch',
  },
});
