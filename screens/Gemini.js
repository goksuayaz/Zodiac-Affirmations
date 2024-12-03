import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Gemini = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gemini Affirmations</Text>
      <Text style={styles.affirmation}>My intelligence and curiosity allow me to learn something new every day.</Text>
      <Text style={styles.affirmation}>My communication skills shine brightly in every setting.</Text>
      <Text style={styles.affirmation}>My flexibility and adaptability lead me to success in all areas of life.</Text>
      <Text style={styles.affirmation}>I choose to enjoy every experience and fill my life with fun.</Text>
      <Text style={styles.affirmation}>My ideas and creativity inspire those around me.</Text>
      <Text style={styles.affirmation}>My quick thinking allows me to find solutions to any problem.</Text>
      <Text style={styles.affirmation}>My dual nature helps me see every situation from different perspectives.</Text>
      <Text style={styles.affirmation}>My social nature and cheerfulness help me build warm friendships everywhere.</Text>
      <Text style={styles.affirmation}>I am always open to learning, exploring, and improving myself.</Text>
      <Text style={styles.affirmation}>With my dynamic and energetic spirit, I live my life to the fullest.</Text>

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

export default Gemini;