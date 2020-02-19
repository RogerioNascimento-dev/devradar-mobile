import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import Lottie from "lottie-react-native";
import animaUm from "../loadMapa.json";

const TesteLottie = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Lottie
        style={styles.lottieDefalt}
        resizeMode="contain"
        autoSize
        autoPlay
        source={animaUm}
        loop
      />
      <Lottie
        style={styles.lottieDefalt}
        resizeMode="contain"
        autoSize
        autoPlay
        source={animaUm}
        loop
      />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Main");
        }}
        style={styles.button}
      >
        <Text
          style={{
            textAlign: "center",
            justifyContent: "center",
            fontSize: 30
          }}
        >
          Navegar
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
  },
  button: {
    backgroundColor: "#7155",
    width: 150,
    height: 50
  },
  lottieDefalt: {
    width: 150,
    height: 150
  }
});
export default TesteLottie;
