import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Virgo = () => {

    const [activeTab, setActiveTab] = useState("Work&Money");

    const content = {

        "Work&Money": [
            "I use my analytical skills and dedication to achieve financial stability and success.",

            "Opportunities for growth and prosperity come naturally to me as I work with focus and precision.",

            "I am organized and resourceful, which allows me to manage my finances wisely.",

            "My hard work and attention to detail consistently lead to rewarding outcomes.",

            "I attract financial abundance and create a secure foundation for my future."


        ],


        "Love": [
            "I am worthy of love that values my thoughtful and caring nature.",

            "I attract a partner who appreciates my sincerity and devotion.",

            "My relationships are grounded in trust, respect, and mutual understanding.",

            "I embrace love with an open heart, knowing it brings joy and fulfillment into my life.",

            "I deserve a relationship that nurtures my mind, body, and soul."



        ],


        "Health": [

            "I honor my body by making healthy choices that support my well-being.",

            "My mind, body, and spirit are in perfect harmony, promoting vibrant health.",

            "I take care of myself with dedication and love, and my body rewards me with strength.",

            "I am resilient, and my health improves with every positive action I take.",

            "I trust my ability to maintain balance and wellness in all aspects of my life."



        ],


        "Sprituality": [

            "I trust in the divine plan, knowing that every detail of my journey has a purpose.",

            "My grounded nature helps me stay connected to the universe and my inner wisdom.",

            "I embrace my spiritual growth with patience, clarity, and an open heart.",

            "I find peace and purpose in aligning my actions with my higher self.",

            "The universe supports me as I seek balance and harmony in my spiritual path."


        ]
    }



    return (
        <View style={styles.container}>

            <View style={styles.imagearea}>
                <Image style={styles.imagevirgo} source={require("../assets/visuals/virgo.jpg")} />
            </View>

            <View style={styles.titlearea}>
                <Text style={styles.title}>Virgo Affirmations</Text>
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
        backgroundColor: "#eee0cb",
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


    imagevirgo: {
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


export default Virgo;