import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Aries = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aries Affirmations</Text>
      <Text style={styles.affirmation}>I nourish my courage with strength every moment and step fearlessly into new beginnings.</Text>
      <Text style={styles.affirmation}>I inspire and guide others with my leadership skills.</Text>
      <Text style={styles.affirmation}>My energy and passion provide me with unlimited power to achieve my goals.</Text>
      <Text style={styles.affirmation}>With determination and perseverance, I can overcome any challenge.</Text>
      <Text style={styles.affirmation}>I create new opportunities every day to improve myself.</Text>
      <Text style={styles.affirmation}>With my natural bravery, I turn risks into opportunities.</Text>
      <Text style={styles.affirmation}>I take control of my life with love and wisdom.</Text>
      <Text style={styles.affirmation}>Through honest and open communication, I build trust around me.</Text>
      <Text style={styles.affirmation}>With my creativity and confidence, I make a unique contribution to every project.</Text>
      <Text style={styles.affirmation}>Obstacles make me stronger and more resilient.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  title: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 18,
    fontWeight: 'bold',
  },

  affirmation: {
    marginTop: 20,
    fontSize: 16,
    lineHeight: 24,
    marginLeft: 16

  }
})

export default Aries;
