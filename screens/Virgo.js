import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Virgo = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Virgo Affirmations</Text>
            <Text style={styles.affirmation}>My attention to detail helps me achieve excellent results.</Text>
            <Text style={styles.affirmation}>My planning and organizational skills help me live my life in harmony.</Text>
            <Text style={styles.affirmation}>My hard work and determination drive me to achieve my goals.</Text>
            <Text style={styles.affirmation}>With my helpful nature, I offer love and support to those around me.</Text>
            <Text style={styles.affirmation}>My intelligence and analytical thinking help me find practical solutions to problems.</Text>
            <Text style={styles.affirmation}>I prioritize my health and well-being, living a balanced life.</Text>
            <Text style={styles.affirmation}>I strive to improve myself and become a better individual every day.</Text>
            <Text style={styles.affirmation}>I create peace by bringing order and clarity to my life.</Text>
            <Text style={styles.affirmation}>My reliable and honest nature helps me build strong relationships.</Text>
            <Text style={styles.affirmation}> I choose to live a simple and meaningful life.</Text>

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

export default Virgo;