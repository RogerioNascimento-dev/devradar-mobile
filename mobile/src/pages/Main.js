import React, { useEffect, useState } from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import MapView, { Marker, Callout } from "react-native-maps";
import {
  requestPermissionsAsync,
  getCurrentPositionAsync
} from "expo-location";

function Main({ navigation }) {
  const [currentPosition, setCurrentPosition] = useState(null);
  const [KeyboardActive, setKeyboardActive] = useState(false);
  useEffect(() => {
    async function loadInicialPosition() {
      const { granted } = await requestPermissionsAsync();

      if (granted) {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true
        });
        const { latitude, longitude } = coords;
        setCurrentPosition({
          latitude,
          longitude,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02
        });
      }
    }
    loadInicialPosition();
  }, []);

  Keyboard.addListener("keyboardDidShow", () => {
    setKeyboardActive(true);
  });

  Keyboard.addListener("keyboardDidHide", () => {
    setKeyboardActive(false);
  });

  if (!currentPosition) {
    return null;
  }
  return (
    <>
      <MapView initialRegion={currentPosition} style={styles.map}>
        <Marker coordinate={{ latitude: -12.8779558, longitude: -38.3381818 }}>
          <Image
            style={styles.avatar}
            source={{
              uri: "https://avatars1.githubusercontent.com/u/40906099"
            }}
          />
          <Callout
            onPress={() => {
              //navegação
              navigation.navigate("Profile", {
                github_username: "Rogerionascimento-dev"
              });
            }}
          >
            <View style={styles.callout}>
              <Text style={styles.calloutTitle}>Rogério Nascimento</Text>
              <Text style={styles.calloutBio}>
                Esta aqui é a minha bio, pois serve como descricao
              </Text>
              <Text style={styles.calloutTechs}>
                NodeJs,ReactJs, React Native
              </Text>
            </View>
          </Callout>
        </Marker>
      </MapView>

      <View
        style={[
          styles.searchForm,
          KeyboardActive ? { top: 250 } : { bottom: 20 }
        ]}
      >
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar Por Tecnologia"
          placeholderTextColor="#ccc"
          autoCapitalize="words"
          autoCorrect={false}
        />
        <TouchableOpacity onPress={() => {}} style={styles.searchButton}>
          <MaterialIcons name="my-location" size={20} color="#FFF" />
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  searchForm: {
    position: "absolute",
    left: 20,
    right: 20,
    zIndex: 5,
    flexDirection: "row"
  },
  searchInput: {
    backgroundColor: "#fff",
    flex: 1,
    height: 50,
    paddingHorizontal: 15,
    borderRadius: 30,
    fontSize: 15,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 4, height: 4 },
    elevation: 2
  },
  searchButton: {
    width: 50,
    height: 50,
    backgroundColor: "#7159c1",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10
  },
  map: {
    flex: 1
  },
  avatar: {
    width: 54,
    height: 54,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#FFF"
  },
  callout: {
    width: 260,
    borderRadius: 10
  },
  calloutTitle: {
    fontWeight: "bold",
    fontSize: 16
  },
  calloutBio: {
    color: "#666",
    marginTop: 5
  },
  calloutTechs: {
    marginTop: 5
  }
});
export default Main;
