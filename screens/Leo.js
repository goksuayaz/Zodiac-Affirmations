import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Leo = () => {

    const [activeTab, setActiveTab] = useState("Work&Money");

    const content = {


        "Work&Money": [

            "I confidently attract success and financial abundance into my life.",

            "My leadership skills and creativity open doors to endless career opportunities.",

            "I am deserving of wealth, and I use it to create a fulfilling and generous life.",

            "I boldly pursue my goals, knowing that my hard work brings financial rewards.",

            "I radiate energy and determination, inspiring others and achieving prosperity."



        ],


        "Love": [

            "I attract passionate and loyal love that honors my heart and soul.",

            "My vibrant energy draws in a partner who values and cherishes me deeply.",

            "I am confident in expressing my love, and I receive love in abundance.",

            "My relationships are filled with warmth, trust, and mutual admiration.",

            "I deserve a love that matches my fiery spirit and makes my heart shine."


        ],


        "Health": [

            "My body is strong, my mind is clear, and my spirit is vibrant.",

            "I honor my health by nourishing my body with energy and vitality.",

            "I radiate strength and resilience, healing effortlessly from within.",

            "Every day, I grow healthier, stronger, and more energetic.",

            "I am in perfect harmony with my body, and I embrace a life of wellness."



        ],

        "Sprituality": [

            "I shine my inner light brightly, inspiring those around me on their spiritual paths.",

            "I trust in the universe to guide me toward my highest spiritual purpose.",

            "My connection to the divine fills me with strength, courage, and wisdom.",

            "I embrace my spiritual journey with an open heart and a fearless spirit.",

            "I radiate love and positivity, aligning myself with the infinite energy of the cosmos."



        ]
    }



    return (
        <View style={styles.container}>

            <View style={styles.imagearea}>
                <Image style={styles.imageleo} source={require("../assets/visuals/leo.jpg")} />
            </View>

            <View style={styles.titlearea}>
                <Text style={styles.title}>Leo Affirmations</Text>
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
        backgroundColor: "#ff8500",
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


    imageleo: {
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
        lineHeight: 30,
        textAlign: "center",
        color: "#fff",
    },
});

export default Leo;