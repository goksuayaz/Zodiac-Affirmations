import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Taurus = () => {

  const [activeTab, setActiveTab] = useState("Work&Money");

  const content = {
    "Work&Money": [



    ],

    "Love": [


    ],

    "Health": [

    ],

    "Sprituality": [


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