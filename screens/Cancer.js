import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Cancer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Cancer Affirmations</Text>
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

export default Cancer;