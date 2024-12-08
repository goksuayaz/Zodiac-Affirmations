import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Gemini = () => {

  const [activeTab, setActiveTab] = useState("Work&Money");

  const content = {

    "Work&Money": [

      "My creativity and adaptability open doors to new and exciting financial opportunities.",

      "I am skilled at multitasking, and my diverse talents bring me success and prosperity.",

      "I confidently navigate changes and challenges, turning them into opportunities for growth.",

      "My quick thinking and communication skills attract success and wealth into my life.",

      "I embrace flexibility in my career, allowing me to thrive in any environment."

    ],

    "Love": [

      "I communicate my feelings with ease and attract relationships filled with understanding and harmony.",

      "My playful and curious nature brings joy and excitement to my love life.",

      "I attract a partner who appreciates my duality and loves me for who I am.",

      "I create strong emotional and intellectual connections in my relationships.",

      "Love flows freely into my life, and I embrace it with an open heart and mind."

    ],


    "Health": [

      "I balance my energetic and active lifestyle with rest and self-care, ensuring my well-being.",

      "My body and mind are in harmony, allowing me to feel vibrant and full of life.",

      "I make conscious choices to nourish my body with healthy food and exercise.",

      "I listen to my body’s needs and take time to recharge when necessary.",

      "My curious mind and positive energy contribute to my overall health and happiness."



    ],


    "Sprituality": [

      "I embrace my curiosity and explore spiritual truths that deepen my connection to the universe.",

      "My dual nature helps me see the world from multiple perspectives, enriching my spiritual journey.",

      "I trust my intuition and allow it to guide me toward peace and inner wisdom.",

      "I am open to change and growth, understanding that my spirit thrives in transformation.",

      "The universe provides me with endless inspiration to nurture my soul and expand my consciousness."



    ]


  }


  return (

    <View style={styles.container}>

      <View style={styles.imagearea}>
        <Image style={styles.imagegemini} source={require("../assets/visuals/gemini.jpg")} />
      </View>

      <View style={styles.titlearea}>
        <Text style={styles.title}>Gemini Affirmations</Text>
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
    backgroundColor: "#ffd61f",
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


  imagegemini: {
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

export default Gemini;