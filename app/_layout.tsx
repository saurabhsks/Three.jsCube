import React from "react";
import { View, StyleSheet } from "react-native";
import HomeScreen from "../components/HomeScreen"; // Import HomeScreen

const Layout: React.FC = () => {
  return (
    <View style={styles.container}>
      <HomeScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default Layout;