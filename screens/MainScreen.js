import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const MainScreen = ({ navigation }) => {
  return (

    <View style={styles.container}>

      <View style={styles.welcome}>
        <Text style={styles.welcomeText}> Welcome to Zodiac-Affirmations </Text>
        <Text style={styles.affirmation}> Discover personalized affirmations tailored to your zodiac sign! </Text>
      </View>

      <View style={styles.infos}>
        <View style={styles.circleRow}>
          <TouchableOpacity onPress={() => navigation.navigate("ZodiacSecrets")}>
            <View style={styles.circle}>
              <Text style={styles.circleText}>Zodiac Secrets</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("ZodiacMatches")}>
            <View style={styles.circle}>
              <Text style={styles.circleText}>Zodiac Matches</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("PlanetMysteries")}>
            <View style={styles.circle}>
              <Text style={styles.circleText}>Planet Mysteries</Text>
            </View>
          </TouchableOpacity>

        </View>


      </View>

      <View style={styles.signs}>
        <Text style={styles.select}> Select Your Sign </Text>
        <View style={styles.imageGrid}>
          {/* Aries */}
          <View style={styles.imageBox}>
            <TouchableOpacity onPress={() => navigation.navigate("Aries")}>
              <Image
                style={styles.image}
                source={require("../assets/visuals/aries.jpg")}
              />
            </TouchableOpacity>
            <Text style={styles.text}>Aries</Text>
          </View>

          {/* Taurus */}
          <View style={styles.imageBox}>
            <TouchableOpacity onPress={() => navigation.navigate("Taurus")}>
              <Image
                style={styles.image}
                source={require("../assets/visuals/tauruss.jpg")}
              />
            </TouchableOpacity>
            <Text style={styles.text}>Taurus</Text>
          </View>

          {/* Gemini */}
          <View style={styles.imageBox}>
            <TouchableOpacity onPress={() => navigation.navigate("Gemini")}>
              <Image
                style={styles.image}
                source={require("../assets/visuals/gemini.jpg")}
              />
            </TouchableOpacity>
            <Text style={styles.text}>Gemini</Text>
          </View>

          {/* Cancer */}
          <View style={styles.imageBox}>
            <TouchableOpacity onPress={() => navigation.navigate("Cancer")}>
              <Image
                style={styles.image}
                source={require("../assets/visuals/cancer.jpg")}
              />
            </TouchableOpacity>
            <Text style={styles.text}>Cancer</Text>
          </View>

          {/* Leo */}
          <View style={styles.imageBox}>
            <TouchableOpacity onPress={() => navigation.navigate("Leo")}>
              <Image
                style={styles.image}
                source={require("../assets/visuals/leo.jpg")}
              />
            </TouchableOpacity>
            <Text style={styles.text}>Leo</Text>
          </View>

          {/* Virgo */}
          <View style={styles.imageBox}>
            <TouchableOpacity onPress={() => navigation.navigate("Virgo")}>
              <Image
                style={styles.image}
                source={require("../assets/visuals/virgo.jpg")}
              />
            </TouchableOpacity>
            <Text style={styles.text}>Virgo</Text>
          </View>

        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#001c55",

  },

  welcomeText: {
    color: "#fff",
    marginTop: 120,
    marginLeft: 8,
    fontSize: 25,
    fontWeight: "bold",
  },

  affirmation: {
    color: "#fff",
    marginTop: 10,
    marginLeft: 12,
    fontSize: 18,
    opacity: 0.5,


  },

  infos: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 300,
    height: 50,
    marginTop: 60,


  },
  circleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 30,
    marginTop: 10,
  },


  circle: {
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    padding: 15,
    backgroundColor: "#85C1E980",



  },





  signs: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 70,

  },
  imageGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 3,
  },
  imageBox: {
    alignItems: "center",
    margin: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 16,
  },
  text: {
    color: "#fff",
    marginTop: 5,
    fontSize: 14,
  },
  select: {
    color: "#fff",
    marginBottom: 20,
    marginRight: 210,
    fontSize: 20,
  },

});

export default MainScreen;
