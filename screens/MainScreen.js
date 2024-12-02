import {
  View,
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
      <View style={styles.imageview1}>
        <View style={styles.imagebox}>
          <TouchableOpacity onPress={() => navigation.navigate("Aries")}>
            <Image
              style={styles.image}
              source={require("../assets/visuals/aries.jpg")}
            />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("Taurus")}>
            <Image
              style={styles.image}
              source={require("../assets/visuals/tauruss.jpg")}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.imageview}>
        <View style={styles.imagebox}>
          <TouchableOpacity onPress={() => navigation.navigate("Gemini")}>
            <Image
              style={styles.image}
              source={require("../assets/visuals/gemini.jpg")}
            />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("Cancer")}>
            <Image
              style={styles.image}
              source={require("../assets/visuals/cancer.jpg")}
            />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("Leo")}>
            <Image
              style={styles.image}
              source={require("../assets/visuals/leo.jpg")}
            />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("Virgo")}>
            <Image
              style={styles.image}
              source={require("../assets/visuals/virgo.jpg")}
            />
          </TouchableOpacity>
        </View>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#001c55',

  },
  imagebox: {
    alignItems: "center",
  },
  imageview1: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 5,
    marginBottom: 10
  },
  imageview: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 5,
  },
  image: {
    width: 200,
    height: 250,
    borderRadius: 7
  },
});

export default MainScreen;
