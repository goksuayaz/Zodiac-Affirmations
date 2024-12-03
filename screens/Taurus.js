import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Taurus = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Taurus Affirmations</Text>
      <Text style={styles.affirmation}>I build security and peace in my life with love.</Text>
      <Text style={styles.affirmation}>My patience and determination help me achieve all my goals.</Text>
      <Text style={styles.affirmation}>My strength and resilience help me overcome every challenge I face.</Text>
      <Text style={styles.affirmation}>The value I give myself enriches and beautifies my life.</Text>
      <Text style={styles.affirmation}>I feel the peace and energy of nature within me at all times.</Text>
      <Text style={styles.affirmation}>WWith my loyal and loving heart, I bring trust and happiness to those around me.</Text>
      <Text style={styles.affirmation}>Abundance and prosperity are my natural living spaces.</Text>
      <Text style={styles.affirmation}>My artistic spirit and creativity add grace to everything I do.</Text>
      <Text style={styles.affirmation}>I enjoy life while building a solid future.</Text>
      <Text style={styles.affirmation}>The bonds I build with love make my life meaningful and valuable.</Text>
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

export default Taurus;