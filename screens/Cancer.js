import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Cancer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cancer Affirmations</Text>
      <Text style={styles.affirmation}>With my loving heart, I spread peace and compassion to those around me.</Text>
      <Text style={styles.affirmation}> I embrace my emotions with love and live in harmony with them.</Text>
      <Text style={styles.affirmation}> I am a strong source of support for my loved ones.</Text>
      <Text style={styles.affirmation}>My inner intuition always guides me to the right path.</Text>
      <Text style={styles.affirmation}>My family and friendships are the foundation of my life.</Text>
      <Text style={styles.affirmation}>I find strength and resilience within me during every challenge.</Text>
      <Text style={styles.affirmation}> I express myself freely with my creativity and imagination.</Text>
      <Text style={styles.affirmation}>With my protective nature, I provide a safe space for my loved ones.</Text>
      <Text style={styles.affirmation}> My emotional intelligence and sensitivity make my life meaningful.</Text>
      <Text style={styles.affirmation}> The bonds I create with love empower and bring happiness to me.</Text>
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

export default Cancer;