import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Taurus = () => {

  const [activeTab, setActiveTab] = useState("Work&Money");

  const content = {
    "Work&Money": [

      "I am determined and capable of achieving financial abundance through my hard work and perseverance.",

      "Opportunities for growth and success flow to me naturally, and I make the most of them.",

      "My strong sense of discipline and practicality guide me toward wise financial decisions.",

      "I attract stability and prosperity in my work and financial endeavors effortlessly.",

      "My patience and persistence create lasting success and security in my career and finances."

    ],

    "Love": [

      "I am deserving of love and open my heart to deep, meaningful connections.",

      "Love flows to me effortlessly, and I radiate warmth and compassion in all my relationships.",

      "I attract a partner who values and respects me as much as I value and respect myself.",

      "My heart is filled with love, and I freely share it with the world around me.",

      "Love strengthens and uplifts me, bringing joy and harmony into my life."


    ],

    "Health": [

      "I prioritize my health and make choices that nourish my body and mind.",

      "Every day, I grow stronger, healthier, and more vibrant.",

      "I listen to my body and give it the rest and care it needs to thrive.",

      "Positive energy flows through me, healing and rejuvenating every cell of my body.",

      "I am grateful for my health and treat my body with love and respect."

    ],

    "Sprituality": [

      "I am deeply connected to the universe, and it guides me toward peace and enlightenment.",

      "My inner wisdom grows stronger every day, leading me to my highest self.",

      "I trust the journey of my soul and embrace the lessons it brings with gratitude.",

      "I align my mind, body, and spirit to create harmony and balance within.",

      "I attract positive energy and divine love, which uplift and inspire my spirit."

    ]
  }


  return (

    <View style={styles.container}>

      <View style={styles.imagearea}>
        <Image style={styles.imagetaurus} source={require("../assets/visuals/tauruss.jpg")} />
      </View>



      <View style={styles.titlearea}>
        <Text style={styles.title}>Taurus Affirmations</Text>
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
    backgroundColor: "#008000"
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

  imagetaurus: {
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

export default Taurus;