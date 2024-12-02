import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Taurus = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Taurus Affirmations</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    textAlign: 'center',
    marginTop: 50
  }
})

export default Taurus;