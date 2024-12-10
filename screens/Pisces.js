import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Pisces = () => {
    const [activeTab, setActiveTab] = useState('Work&Money');

    const content = {
        "Work&Money": [

            "My creative talents and intuition bring me success in work and finances.",

            "Money flows into my life effortlessly and naturally.",

            "I find passion in my work, which brings me abundance and prosperity.",

            "My intuition guides me to make the right financial decisions.",

            "I am in a state of constant growth and balance in my career and financial life."



        ],


        "Love": [

            "My emotional connections in love are strong and deep.",

            "I deserve a loving relationship that brings me peace.",

            "I open my heart to love and attract the right person into my life.",

            "Understanding and romance flow naturally in my love life.",

            "I experience unconditional love and harmony in my relationships."


        ],


        "Health": [

            "My body, mind, and soul are in balance, and I am healthy.",

            "My health improves with each passing day, and I feel strong.",

            "I take care of myself emotionally and physically.",

            "I am filled with positive energy, and I radiate it to my body.",

            "Health and well-being are my natural state."


        ],

        "Spirituality": [

            "I trust my inner guidance on my spiritual journey and find peace.",

            "I am deeply connected to the universe, and it inspires me.",

            "My intuition shows me the right path, and I follow it with love.",

            "My spiritual energy grows stronger every day, creating deep meaning in my life.",

            "The infinite love and light of the universe guide me at all times."



        ]
    };

    return (
        <View style={styles.container}>

            <View style={styles.imagearea}>
                <Image style={styles.imagepisces} source={require("../assets/visuals/pisces.jpg")} />
            </View>

            <View style={styles.titlearea}>
                <Text style={styles.title}>Pisces Affirmations</Text>
            </View>

            <View style={styles.buttonsarea}>
                <View style={styles.buttons}>
                    {Object.keys(content).map((tab) => (
                        <TouchableOpacity
                            key={tab}
                            style={[
                                styles.button,
                                activeTab === tab && styles.activeButton,
                            ]}
                            onPress={() => setActiveTab(tab)}
                        >
                            <Text style={styles.categories}>{tab}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>

            <View style={styles.contentArea}>
                <Text style={styles.affirmation}>{content[activeTab]}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#c19ee0",
    },

    imagearea: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 100,
        width: 320,
        height: 320,
        backgroundColor: "#fff",
        borderRadius: 16,
        marginLeft: 50,
    },


    imagepisces: {
        width: 300,
        height: 300,
        borderRadius: 8,
    },


    titlearea: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },

    title: {
        textAlign: 'center',
        marginTop: 12,
        fontSize: 25,
        fontWeight: 'bold',
    },


    buttonsarea: {
        justifyContent: "center",
        alignItems: "center",
    },

    buttons: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 20,
        marginLeft: 15,
        marginRight: 15,
    },

    button: {
        width: 85,
        height: 25,
        backgroundColor: "#fff",
        marginHorizontal: 5,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
    },


    activeButton: {
        backgroundColor: "#fdc100",
    },


    categories: {
        fontSize: 12,
        textAlign: "center",
    },

    contentArea: {
        marginTop: 30,
        paddingHorizontal: 16,
    },


    affirmation: {
        fontSize: 16,
        lineHeight: 22,
        textAlign: "center",
        color: "#fff",
    },
});

export default Pisces;
