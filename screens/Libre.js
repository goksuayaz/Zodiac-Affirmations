import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Libre = () => {

    const [activeTab, setActiveTab] = useState("Work&Money");

    const content = {


        "Work&Money": [

            "I work in balance and harmony, and I am generously rewarded for my efforts.",

            "My financial gains are constantly increasing, and my financial decisions lead me to success.",

            "I embrace and utilize the opportunities I encounter in my career with love.",

            "I deserve success, and my efforts are always rewarded fairly.",

            "I attract, save, and share money, maintaining balance in life."


        ],


        "Love": [

            "Balance and harmony are always present in my love life.",

            "I deserve a loving and healthy relationship, and I attract it effortlessly.",

            "I embrace myself with love, which brings more love into my life.",

            "Compassion and understanding are always at the forefront of my relationships.",

            "I gratefully welcome all the love and romantic energy that comes into my life."


        ],


        "Health": [

            "Health and balance are natural parts of my life.",

            "I listen to my body and lovingly meet its needs.",

            "I feel stronger, healthier, and more energetic every day.",

            "I maintain my spiritual and physical balance, living a healthy life.",

            "Health flows to me effortlessly, and every cell in my body is filled with healing."


        ],

        "Sprituality": [

            "Balance and harmony are my guides on my spiritual journey.",

            "I lovingly accept signs from the universe and trust my inner guidance.",

            "My soul is surrounded by love and light, and I gain more awareness each day.",

            "I am free to express myself spiritually, and it brings me fulfillment.",

            "I feel the harmony of the universe and experience spiritual peace as part of it."


        ]
    }



    return (

        <View style={styles.container}>

            <View style={styles.imagearea}>
                <Image style={styles.imagelibre} source={require("../assets/visuals/libra.jpg")} />
            </View>

            <View style={styles.titlearea}>
                <Text style={styles.title}>Libre Affirmations</Text>
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
        backgroundColor: "#ffc8dd",
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


    imagelibre: {
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

export default Libre;