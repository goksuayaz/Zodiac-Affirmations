import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Aries = () => {
  const [activeTab, setActiveTab] = useState('Work&Money');

  const content = {
    "Work&Money": [
      "I am a natural leader, and opportunities flow effortlessly to me.",

      "I attract financial abundance with my boldness and determination.",

      "My ambition and energy open doors to endless career opportunities.",

      "I am a magnet for exciting projects and rewarding opportunities.",


      "My confidence and passion attract wealth and prosperity into my life."


    ],
    "Love": [
      "I radiate confidence and passion, attracting deep and meaningful love into my life.",

      "My bold heart leads me to fulfilling and exciting relationships.",

      "I deserve a love that matches my energy, enthusiasm, and authenticity.",

      "I am open to giving and receiving love freely and fearlessly.",

      "My courage and honesty create a strong and passionate connection with my partner."




    ],
    "Health": [
      "My vibrant energy fuels my body, keeping me strong and healthy.",

      "I listen to my body’s needs and make choices that support my well-being.",

      "My active and adventurous spirit keeps me fit and full of life.",

      "I embrace balance and nurture my mind, body, and soul daily.",

      "With determination and focus, I build a lifestyle that promotes lasting health and vitality."


    ],
    "Spirituality": [
      "My fiery spirit connects me deeply to the universe’s boundless energy.",

      "I trust my intuition to guide me on my spiritual journey with courage and clarity.",

      "My inner strength fuels my growth and aligns me with my highest purpose.",

      "I embrace new spiritual paths with an open and fearless heart.",

      "Through self-reflection and determination, I awaken to my true potential and divine connection."

    ]
  };

  return (
    <View style={styles.container}>

      <View style={styles.imagearea}>
        <Image style={styles.imagearies} source={require("../assets/visuals/aries.jpg")} />
      </View>

      <View style={styles.titlearea}>
        <Text style={styles.title}>Aries Affirmations</Text>
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
    backgroundColor: "#ff1d15",
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


  imagearies: {
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
    color: "#000"
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

export default Aries;
