import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const SolarEclipse = () => {

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
            <View style={styles.container}>
                <Text style={styles.headerText}> 🌅 Solar Eclipse 🌅</Text>

                <View style={styles.top}>
                    <View style={styles.contentBox}>
                        <Text style={styles.text}>
                            In astrology, a solar eclipse signifies a period of powerful transformation and new beginnings. This event occurs during the new moon phase when the Sun, Moon, and Earth align, causing the Sun to be partially or completely obscured. A solar eclipse symbolizes a transition between darkness and light, often indicating significant changes in our personal lives. It is a time for unexpected events, new opportunities, and the dismantling of old patterns.
                        </Text>
                    </View>

                    <View style={styles.contentBox}>
                        <Text style={styles.topic}>
                            Astrological Effects of a Solar Eclipse:
                        </Text>

                        <Text style={styles.text}>
                            A solar eclipse can bring renewal, new beginnings, and awareness to specific areas of life. Its effects depend on the zodiac sign and house it occurs in. Common effects include: </Text>
                        <Text style={styles.text}>
                            New Beginnings: Encourages letting go of the old to start a new cycle.</Text>
                        <Text style={styles.text}>
                            Awareness and Enlightenment: Hidden truths about ourselves or our surroundings may come to light. </Text>
                        <Text style={styles.text}>
                            Rapid Changes: Sudden decisions or unexpected events can lead to new directions.</Text>
                        <Text style={styles.text}>
                            Emotional and Spiritual Impact: People may feel more unsettled, emotional, or intense during this time.
                        </Text>
                    </View>


                    <View style={styles.contentBox}>
                        <Text style={styles.topic}>
                            How Are We Affected?
                        </Text>

                        <Text style={styles.text}>
                            During a solar eclipse, individuals often experience emotional fluctuations, heightened self-awareness, or a sense of motivation. The impact on a person depends on how the eclipse interacts with their natal chart. For example:
                            <Text style={styles.text}>
                                Fire Signs (Aries, Leo, Sagittarius): May take bold actions and feel energized.</Text>
                            <Text style={styles.text}>
                                Earth Signs (Taurus, Virgo, Capricorn): May face changes in practical or material matters.</Text>
                            <Text style={styles.text}>
                                Air Signs (Gemini, Libra, Aquarius): May focus on new ideas and social connections. </Text>
                            <Text style={styles.text}>
                                Water Signs (Cancer, Scorpio, Pisces): May undergo deep emotional and intuitive experiences.</Text>
                        </Text>
                    </View>


                    <View style={styles.contentBox}>
                        <Text style={styles.topic}>
                            What Can We Do During a Solar Eclipse?
                        </Text>

                        <Text style={styles.text}>
                            Set Intentions: Define goals for new beginnings and write them down.</Text>
                        <Text style={styles.text}>
                            Meditation and Reflection: Use the eclipse's energy to connect inwardly and find inner peace.</Text>
                        <Text style={styles.text}>
                            Let Go of the Old: Consider releasing habits or thought patterns that no longer serve you.</Text>
                        <Text style={styles.text}>
                            Make Careful Decisions: Avoid impulsive decisions and take a thoughtful approach during this period.</Text>
                        <Text style={styles.text}>
                            Connect with Nature: Observing the solar eclipse in nature can help you better understand its energy.</Text>
                    </View>
                </View >
            </View>
        </ScrollView >
    );
};

const styles = StyleSheet.create({


    scroll: {
        backgroundColor: "#FFD700",
        paddingHorizontal: 10,
    },


    container: {
        flex: 1,
        padding: 10,
        minHeight: "100%",

    },

    top: {
        marginTop: 20,

    },


    contentBox: {
        marginVertical: 10,
        padding: 12,
        backgroundColor: "#f8f9fa",
        borderRadius: 8,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
    },


    headerText: {
        fontSize: 25,
        fontWeight: "bold",
        marginTop: 40,
        textAlign: "center",
    },


    text: {
        fontSize: 16,
        lineHeight: 24,
        color: "#333",
    },

    topic: {
        fontSize: 16,
        lineHeight: 24,
        fontWeight: "bold",
    }
});

export default SolarEclipse;