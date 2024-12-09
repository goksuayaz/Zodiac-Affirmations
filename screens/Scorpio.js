import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Scorpio = () => {

    const [activeTab, setActiveTab] = useState("Work&Money");

    const content = {
        "Work&Money": [

            "My passion and determination lead me to great success in my career.",

            "I remain strong and find creative solutions to financial challenges.",

            "I easily determine the right strategies to achieve my financial goals.",

            "I attract abundance and prosperity into my life, and my earnings grow daily.",

            "My work energy and motivation are enough to turn my dreams into reality."



        ],

        "Love": [

            "I deserve deep and passionate love, and I effortlessly attract the right person into my life.",

            "I create loving relationships and trust in the power of love.",

            "I am free to express myself and my emotions openly, which strengthens love.",

            "Loyalty and commitment are always at the forefront of my relationships.",

            "Love heals me and makes my life more meaningful."


        ],

        "Health": [

            "My body is strong, energetic, and has everything it needs to feel healthy.",

            "I trust in my inner strength to improve my emotional and physical health.",

            "I feel renewed and balanced every day.",

            "Making healthy choices is a natural part of who I am.",

            "Every cell in my body is filled with healing, and I always feel healthy."




        ],

        "Sprituality": [

            "I experience deep awareness and transformation on my spiritual journey.",

            "My intuition is strong and always guides me to the right path.",

            "I accept both my dark and light sides, finding my inner balance.",

            "I am open to universal energies and feel empowered in my spiritual connections.",

            "Every day, I grow spiritually and embrace myself with deeper love."


        ]
    }


    return (

        <View style={styles.container}>

            <View style={styles.imagearea}>
                <Image style={styles.imagescorpio} source={require("../assets/visuals/scorpion.jpg")} />
            </View>



            <View style={styles.titlearea}>
                <Text style={styles.title}>Scorpio Affirmations</Text>
            </View>


            <View style={styles.buttonsarea}>
                <View style={styles.buttons}>
                    {Object.keys(content).map((tab) => (
                        <TouchableOpacity
                            key={tab}
                            style={[
                                styles.button, activeTab === tab && styles.activeButton,

                            ]} onPress={() => setActiveTab(tab)}>
                            <Text style={styles.categories}> {tab} </Text>
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
        backgroundColor: "#9d0208"
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

    imagescorpio: {
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
    }
})

export default Scorpio;