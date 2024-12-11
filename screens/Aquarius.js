import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Aquarius = () => {
    const [activeTab, setActiveTab] = useState('Work&Money');

    const content = {
        "Work&Money": [

            "My creativity and visionary ideas bring success in my career.",

            "I attract money effortlessly and live in abundance.",

            "I create opportunities for myself by bringing innovative solutions to my work.",

            "My intelligence and intuition guide me in making financial decisions.",

            "I experience constant growth and progress in work and financial matters."



        ],
        "Love": [

            "Love flows freely in my life, bringing me happiness.",

            "My connections are strong and harmonious, and I find peace in my love life.",

            "I attract a loving and understanding partner into my life.",

            "I value my individuality while embracing love with openness.",

            "In my love life, I create a bond that transcends boundaries and brings deep joy."



        ],
        "Health": [

            "My body, mind, and spirit work in perfect harmony.",

            "Health is my natural state, and I feel more energetic every day.",

            "I take good care of myself and nourish my body with love.",

            "My mental peace and physical health grow stronger with each passing day.",

            "Making healthy choices brings me happiness and balance."



        ],
        "Spirituality": [

            "I am in harmony with the universe and constantly growing spiritually.",

            "My intuition guides me and helps me find the right path.",

            "Inner peace and balance make my spiritual journey effortless.",

            "With inspiration from the universe, I bring meaning and depth to my life.",

            "My spiritual connections empower me and let my light shine brightly."


        ]
    };

    return (
        <View style={styles.container}>

            <View style={styles.imagearea}>
                <Image style={styles.imageaquarius} source={require("../assets/visuals/aquarius.jpg")} />
            </View>

            <View style={styles.titlearea}>
                <Text style={styles.title}>Aquarius Affirmations</Text>
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
        backgroundColor: "#12d3ba",
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


    imageaquarius: {
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
        color: "#000",
    },
});

export default Aquarius;
