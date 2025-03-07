import React from "react";
import { View, StyleSheet, Text } from "react-native";
import ThreeCube from "./ThreeCube"; // Import the 3D Cube component

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rotating 3D Cube</Text>
      <View style={{ width: "100%", height: "80%" }}>
        <ThreeCube />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default HomeScreen;