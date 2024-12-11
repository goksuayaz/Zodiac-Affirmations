import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const NewMoon = () => {

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>

            <View style={styles.container}>
                <Text style={styles.headerText}>New Moon</Text>

                <View style={styles.top}>
                    <View style={styles.contentBox}>
                        <Text style={styles.text}>
                            In astrology, the new moon occurs when the Moon and the Sun align in the same zodiac sign. This phase represents a time for new beginnings, setting intentions, and planting seeds for the future. During the new moon, the Moon is invisible in the sky, which encourages introspection and planning.
                        </Text>
                    </View>


                    <View style={styles.contentBox}>
                        <Text style={styles.topic}>
                            Themes Represented by the New Moon:

                        </Text>

                        <Text style={styles.text}>
                            Starting new projects
                            Setting goals for personal growth
                            Letting go of old habits
                            Building new relationships or renewing existing ones
                            Spiritual cleansing and intention-setting practices


                        </Text>
                    </View>

                    <View style={styles.contentBox}>

                        <Text style={styles.topic}>
                            The New Moon's Impact on Zodiac Signs:

                        </Text>

                        <Text style={styles.text}>
                            Fire signs (Aries, Leo, Sagittarius) experience increased creativity and courage.
                            Earth signs (Taurus, Virgo, Capricorn) focus on practical planning.
                            Air signs (Gemini, Libra, Aquarius) prioritize new ideas and social connections.
                            Water signs (Cancer, Scorpio, Pisces) enhance emotional healing and intuitive power.
                        </Text>
                    </View>

                    <View style={styles.contentBox}>
                        <Text style={styles.topic}>
                            What Can Be Done During the New Moon?
                        </Text>

                        <Text style={styles.text}>
                            Meditation and intention-setting: Write down your dreams and focus your energy on achieving them.
                            Starting new projects: It's a great time to take steps in work, education, or personal life.
                            Energy cleansing: Use incense or similar methods to cleanse your home or yourself of negative energies.
                            Journaling: Reflect on your thoughts and emotions to gain a clearer perspective.
                        </Text>
                    </View>
                </View>
            </View>
        </ScrollView >
    );
};

const styles = StyleSheet.create({


    scroll: {
        backgroundColor: "#BFBFBF",
        paddingHorizontal: 10,
    },

    top: {
        marginTop: 20,
    },


    container: {
        flex: 1,
        padding: 10,
        minHeight: "100%",
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
        fontSize: 20,
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

export default NewMoon;
