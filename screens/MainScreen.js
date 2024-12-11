import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const MainScreen = ({ navigation }) => {
  return (

    <ScrollView showsVerticalScrollIndicator={false}>

      <View style={styles.container}>

        <View style={styles.welcome}>
          <Text style={styles.welcomeText}> Welcome to Zodiac-Affirmations </Text>
          <Text style={styles.affirmation}> Discover personalized affirmations tailored to your zodiac sign! </Text>
        </View>


        <View style={styles.infos}>
          <View style={styles.circleRow}>
            <TouchableOpacity onPress={() => navigation.navigate("NewMoon")}>
              <View style={styles.circle}>
                <Text style={styles.circleText}>New Moon</Text>
              </View>
            </TouchableOpacity>


            <TouchableOpacity onPress={() => navigation.navigate("FullMoon")}>
              <View style={styles.circle}>
                <Text style={styles.circleText}>Full Moon</Text>
              </View>
            </TouchableOpacity>


            <TouchableOpacity onPress={() => navigation.navigate("SolarEclipse")}>
              <View style={styles.circle}>
                <Text style={styles.circleText}>Solar Eclipse</Text>
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


            {/* Libre */}
            <View style={styles.imageBox}>
              <TouchableOpacity onPress={() => navigation.navigate("Libre")}>
                <Image
                  style={styles.image}
                  source={require("../assets/visuals/libra.jpg")}
                />
              </TouchableOpacity>
              <Text style={styles.text}>Libre</Text>
            </View>


            {/* Scorpio */}
            <View style={styles.imageBox}>
              <TouchableOpacity onPress={() => navigation.navigate("Scorpio")}>
                <Image
                  style={styles.image}
                  source={require("../assets/visuals/scorpion.jpg")}
                />
              </TouchableOpacity>
              <Text style={styles.text}>Scorpio</Text>
            </View>


            {/* Sagittarius */}
            <View style={styles.imageBox}>
              <TouchableOpacity onPress={() => navigation.navigate("Sagittarius")}>
                <Image
                  style={styles.image}
                  source={require("../assets/visuals/sagit.jpg")}
                />
              </TouchableOpacity>
              <Text style={styles.text}>Sagittarius</Text>
            </View>

            {/* Capricorn */}
            <View style={styles.imageBox}>
              <TouchableOpacity onPress={() => navigation.navigate("Capricorn")}>
                <Image
                  style={styles.image}
                  source={require("../assets/visuals/capricorn.jpg")}
                />
              </TouchableOpacity>
              <Text style={styles.text}>Capricorn</Text>
            </View>


            {/* Aquarius */}
            <View style={styles.imageBox}>
              <TouchableOpacity onPress={() => navigation.navigate("Aquarius")}>
                <Image
                  style={styles.image}
                  source={require("../assets/visuals/aquarius.jpg")}
                />
              </TouchableOpacity>
              <Text style={styles.text}>Aquarius</Text>
            </View>

            {/* Pisces */}
            <View style={styles.imageBox}>
              <TouchableOpacity onPress={() => navigation.navigate("Pisces")}>
                <Image
                  style={styles.image}
                  source={require("../assets/visuals/pisces.jpg")}
                />
              </TouchableOpacity>
              <Text style={styles.text}>Pisces</Text>
            </View>

          </View>
        </View>
      </View>
    </ScrollView>
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
    marginTop: 60,
    marginLeft: 4,
    fontSize: 25,
    fontWeight: "bold",
  },

  affirmation: {
    color: "#fff",
    marginTop: 20,
    marginLeft: 8,
    fontSize: 18,
    opacity: 0.5,


  },

  infos: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 300,
    height: 50,
    marginTop: 50,


  },
  circleRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
    marginTop: 10,
  },

  circleText: {
    fontSize: 14,
    color: "#001c55",
    fontWeight: "bold",
    textAlign: "center",


  },


  circle: {
    width: 90,
    height: 90,
    borderRadius: 50,
    padding: 7,
    backgroundColor: "#fcefb4",
    justifyContent: "center",
    alignItems: "center"

  },


  signs: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 50,

  },


  imageGrid: {

    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 3,
    marginTop: 10,
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
    marginTop: 20,
    marginRight: 210,
    fontSize: 20,
  },

});

export default MainScreen;
