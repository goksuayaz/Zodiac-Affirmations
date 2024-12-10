import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Capricorn = () => {

    const [activeTab, setActiveTab] = useState("Work&Money");

    const content = {

        "Work&Money": [

            "My discipline and determination lead me to great financial success.",

            "I always receive the rewards of my hard work and live in abundance.",

            "I move towards my goals with perseverance; success is inevitable for me.",

            "The right opportunities always come my way, and I make the most of them.",

            "I am fortunate in matters of money and career; my life gets better every day."



        ],

        "Love": [

            "I deserve a loving and healthy relationship.",

            "I easily find balance and harmony in my love life.",

            "I open my heart to love, and the right person is drawn into my life.",

            "Trust and respect are the foundations of my relationship.",

            "Love flows naturally in my life and brings me happiness."




        ],


        "Health": [

            "I have a healthy and strong body, and I feel better every day.",

            "I take good care of myself and treat my body with love and respect.",

            "My mind and body are in harmony, and my energy is always high.",

            "I make healthy choices that empower and strengthen me.",

            "My health improves with each passing day, and I feel strong and vibrant."





        ],


        "Sprituality": [


            "I always feel and embrace the guidance from the universe.",

            "I move forward on my spiritual journey with determination and find inner peace.",

            "My intuition leads me to the right path, and I am always protected.",

            "The infinite energy of the universe supports and empowers me.",

            "My spiritual connection grows stronger each day, bringing deep meaning to my life."



        ]


    }


    return (

        <View style={styles.container}>

            <View style={styles.imagearea}>
                <Image style={styles.imagecapricorn} source={require("../assets/visuals/capricorn.jpg")} />
            </View>

            <View style={styles.titlearea}>
                <Text style={styles.title}>Capricorn Affirmations</Text>
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
        backgroundColor: "#d9d9d9",
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


    imagecapricorn: {
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
        color: "#000",
    },
});

export default Capricorn;