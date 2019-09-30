import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Board from './src/components/Board';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu'
});

function App() {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <View style={styles.topBarContent}>
          <Text style={styles.title}>deTECH Sound Effects Board</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
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
