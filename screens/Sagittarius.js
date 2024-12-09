import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Sagittarius = () => {

    const [activeTab, setActiveTab] = useState("Work&Money");

    const content = {

        "Work&Money": [

            "I take bold steps towards my dreams and goals, embracing success.",

            "New opportunities come to me effortlessly in my career, and I attract abundance.",

            "My creativity and originality allow me to create value in my work life.",

            "I deserve financial freedom and am on the right path to achieve it.",

            "I am grateful for all the financial wealth that flows into my life, and I manage it wisely."



        ],

        "Love": [

            "I create loving and meaningful relationships while preserving my freedom.",

            "I effortlessly attract excitement and happiness in my love life.",

            "I deserve a loving partner, and I attract the right person into my life.",

            "Honesty and open communication are always at the forefront of my relationships.",

            "My heart is open to love, and I gratefully accept all the love in my life."


        ],


        "Health": [

            "My life energy is high, my body is strong, and I am healthy.",

            "An active and adventurous lifestyle nourishes me physically and mentally.",

            "Adopting healthy habits is easy and natural for me.",

            "I take care of my body, mind, and soul every day.",

            "The positive energy within me is a source of healing, and I feel renewed at every moment."


        ],


        "Sprituality": [

            "My spiritual journey leads me to new wisdom and understanding.",

            "My connection with universal energies is strong, and I lovingly accept their guidance.",

            "My curiosity and free spirit inspire my spiritual growth.",

            "Every new experience deepens my spiritual awareness.",

            "I am on the right path to spiritual growth and open myself to the love of the universe."



        ]


    }


    return (

        <View style={styles.container}>

            <View style={styles.imagearea}>
                <Image style={styles.imagesagit} source={require("../assets/visuals/sagit.jpg")} />
            </View>

            <View style={styles.titlearea}>
                <Text style={styles.title}>Sagittarius Affirmations</Text>
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
        backgroundColor: "#ff4800",
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


    imagesagit: {
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

export default Sagittarius;