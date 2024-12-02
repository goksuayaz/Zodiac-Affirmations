import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Gemini = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Gemini Affirmations</Text>
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

export default Gemini;