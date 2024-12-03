import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Leo = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Leo Affirmations</Text>
            <Text style={styles.affirmation}>I shine in every setting with my confidence.</Text>
            <Text style={styles.affirmation}>My leadership skills inspire those around me.</Text>
            <Text style={styles.affirmation}>My creativity and energy bring color to my life.</Text>
            <Text style={styles.affirmation}>My courage helps me overcome any challenge.</Text>
            <Text style={styles.affirmation}>With my loving heart, I spread happiness to those around me.</Text>
            <Text style={styles.affirmation}>My strength and determination are limitless in achieving my dreams.</Text>
            <Text style={styles.affirmation}>I recreate myself every day as a stronger and more authentic individual.</Text>
            <Text style={styles.affirmation}>My generosity creates a positive impact on those around me.</Text>
            <Text style={styles.affirmation}>I live my life with enthusiasm and enjoy every moment.</Text>
            <Text style={styles.affirmation}>My self-love and belief make me a unique individual.</Text>

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

export default Leo;