
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const ZodiacMatches = () => {
    return (
        <ScrollView style={styles.scroll}>
            <View style={styles.container}>
                <Text style={styles.headerText}>What is a Fool Moon and What Does It Mean?</Text>

                {[...Array(1)].map((_, index) => (
                    <View key={index} style={styles.contentBox}>
                        <Text style={styles.text}>
                            In astrology, the full moon occurs when the Moon and the Sun are in opposition, and the Moon is fully illuminated in the sky. This phase symbolizes culmination, climax, and the manifestation of efforts. The full moon marks the closure of a cycle while also bringing emotional intensity and heightened awareness. Hidden issues may surface, and it's a time to release what no longer serves you.

                            Themes Represented by the Full Moon
                            The full moon often highlights the following themes:

                            Culmination and achieving results
                            Emotional awareness and confrontations
                            Letting go of old habits and connections
                            Releasing energy and cleansing
                            Inner transformation and emotional healing
                            The Full Moon's Impact on Zodiac Signs
                            The impact of the full moon varies depending on the zodiac sign it occurs in:

                            Fire signs (Aries, Leo, Sagittarius) may feel energized and ready to take decisive actions.
                            Earth signs (Taurus, Virgo, Capricorn) focus on achieving practical results or gaining clarity in material matters.
                            Air signs (Gemini, Libra, Aquarius) experience intense social or mental awareness.
                            Water signs (Cancer, Scorpio, Pisces) undergo deep emotional cleansing and intuitive clarity.
                            What Can Be Done During the Full Moon?

                            Release rituals: Write down habits or emotional burdens you wish to let go of and symbolically release them.
                            Meditation and gratitude practices: Reflect on completed cycles in your life and open space for new opportunities.
                            Emotional cleansing: Engage in activities that allow emotional release, such as journaling or creative projects.
                            Moonlit walks: Connect with nature and embrace the energy of the full moon.
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

export default ZodiacMatches;
