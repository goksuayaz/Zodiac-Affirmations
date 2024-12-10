import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const ZodiacSecrets = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
            <View style={styles.container}>
                <Text style={styles.headerText}>What is a New Moon and What Does It Mean?</Text>

                {[...Array(1)].map((_, index) => (
                    <View key={index} style={styles.contentBox}>
                        <Text style={styles.text}>
                            In astrology, the new moon occurs when the Moon and the Sun align in the same zodiac sign. This phase represents a time for new beginnings, setting intentions, and planting seeds for the future. During the new moon, the Moon is invisible in the sky, which encourages introspection and planning.

                            Themes Represented by the New Moon
                            The new moon often emphasizes the following themes:

                            Starting new projects
                            Setting goals for personal growth
                            Letting go of old habits
                            Building new relationships or renewing existing ones
                            Spiritual cleansing and intention-setting practices
                            The New Moon's Impact on Zodiac Signs
                            The impact of the new moon varies depending on the zodiac sign it occurs in:

                            Fire signs (Aries, Leo, Sagittarius) experience increased creativity and courage.
                            Earth signs (Taurus, Virgo, Capricorn) focus on practical planning.
                            Air signs (Gemini, Libra, Aquarius) prioritize new ideas and social connections.
                            Water signs (Cancer, Scorpio, Pisces) enhance emotional healing and intuitive power.
                            What Can Be Done During the New Moon?

                            Meditation and intention-setting: Write down your dreams and focus your energy on achieving them.
                            Starting new projects: It's a great time to take steps in work, education, or personal life.
                            Energy cleansing: Use incense or similar methods to cleanse your home or yourself of negative energies.
                            Journaling: Reflect on your thoughts and emotions to gain a clearer perspective.
                        </Text>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({


    scroll: {
        backgroundColor: "#f8f9fa",
        paddingHorizontal: 10,
    },


    container: {
        flex: 1,
        padding: 10,
        minHeight: "100%",
    },


    contentBox: {
        marginVertical: 10,
        padding: 15,
        backgroundColor: "#fff",
        borderRadius: 8,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 5,
    },


    headerText: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 20,
        textAlign: "center",
    },


    text: {
        fontSize: 16,
        lineHeight: 24,
        color: "#333",
    },
});

export default ZodiacSecrets;
