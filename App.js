import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ImageComponent from './components/image/image.component';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <ImageComponent />
      </View>
    );
  }
}
