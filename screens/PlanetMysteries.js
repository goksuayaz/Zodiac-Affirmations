
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PlanetMysteries = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome to Planet Mysteries!</Text>
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
    text: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
});

export default PlanetMysteries;
