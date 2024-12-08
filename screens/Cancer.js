import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Cancer = () => {

  const [activeTab, setActiveTab] = useState("Work&Money");

  const content = {

    "Work&Money": [

      "I attract financial abundance effortlessly, and my hard work always pays off.",

      "My creative talents open doors to new opportunities and prosperity in my career.",

      "I am financially secure and attract wealth in alignment with my true purpose.",

      "Every step I take leads me closer to success and stability in my professional life.",

      "I am worthy of earning and receiving wealth, and I use it wisely to create a fulfilling life."


    ],


    "Love": [

      "I open my heart to deep and nurturing love, and it flows effortlessly into my life.",

      "I am worthy of a relationship that brings me emotional security and joy.",

      "Love surrounds me, and I attract a partner who values my caring nature.",

      "I trust in the universe to guide me toward a love that fulfills my soul.",

      "My compassionate heart creates harmony and connection in all my relationships."



    ],


    "Health": [

      "My body is strong, my mind is calm, and my spirit is at peace.",

      "I nurture my body with healthy choices, and it rewards me with vitality and balance.",

      "I trust in my body’s ability to heal and maintain perfect health.",

      "Every cell in my body radiates energy, health, and wellness.",

      "I am in tune with my emotional and physical needs, creating harmony within myself."



    ],


    "Sprituality": [

      "I trust my intuition to guide me on my spiritual journey with clarity and purpose.",

      "I am deeply connected to the universe and embrace the flow of its divine energy.",

      "My soul is nourished by the love and wisdom that surrounds me every day.",

      "I release all fears and embrace a higher understanding of my life’s purpose.",

      "I find peace and strength in my connection to the spiritual world."



    ]
  }



  return (
    <View style={styles.container}>

      <View style={styles.imagearea}>
        <Image style={styles.imagecancer} source={require("../assets/visuals/cancer.jpg")} />
      </View>

      <View style={styles.titlearea}>
        <Text style={styles.title}>Cancer Affirmations</Text>
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
    backgroundColor: "#bde0fe",
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


  imagecancer: {
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

export default Cancer;