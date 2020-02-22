import React, { useEffect, useState } from "react";
import api from "../services/api";
import Lottie from "lottie-react-native";
import loadMap from "../loadMapa.json";
import DropdownAlert from "react-native-dropdownalert";

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
  const [devs, setDevs] = useState([]);
  const [tecs, setTecs] = useState("");

  //por padrão carrega todos os devs cadastrados e joga no mapa
  useEffect(() => {
    api
      .get("/devs")
      .then(function(res) {
        setDevs(res.data);
      })
      .catch(function(err) {
        alert("Não foi possível carregar Devs");
        dropdown.alertWithType("error", "Error", error.message);
      });
  }, []);
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

  async function loadDevs() {
    const { latitude, longitude } = currentPosition;

    api
      .get("/search", {
        params: {
          latitude,
          longitude,
          tecs
        }
      })
      .then(function(response) {
        setDevs(response.data.devs);
      })
      .catch(function(erro) {
        alert("Algo inesperado aconteceu!");
      });
  }

  function handleRegionChange(region) {
    setCurrentPosition(region);
  }

  if (!currentPosition) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Lottie autoPlay resizeMode="contain" autoSize loop source={loadMap} />
      </View>
    );
  }
  return (
    <>
      <MapView
        onRegionChangeComplete={handleRegionChange}
        initialRegion={currentPosition}
        style={styles.map}
      >
        {devs.map(dev => (
          <Marker
            key={dev._id}
            coordinate={{
              latitude: dev.location.coordinates[1],
              longitude: dev.location.coordinates[0]
            }}
          >
            <Image style={styles.avatar} source={{ uri: dev.avatar_url }} />
            <Callout
              onPress={() => {
                //navegação
                navigation.navigate("Profile", {
                  github_username: dev.github_username
                });
              }}
            >
              <View style={styles.callout}>
                <Text style={styles.calloutTitle}>{dev.name}</Text>
                <Text style={styles.calloutBio}>{dev.bio}</Text>
                <Text style={styles.calloutTechs}>{dev.tecs.join(", ")}</Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>

      <View
        style={[
          styles.searchForm,
          KeyboardActive ? { top: 20 } : { bottom: 20 }
        ]}
      >
        <TextInput
          onChangeText={text => {
            setTecs(text);
          }}
          style={styles.searchInput}
          placeholder="Buscar Por Tecnologia"
          placeholderTextColor="#ccc"
          autoCapitalize="words"
          autoCorrect={false}
        />
        <TouchableOpacity onPress={loadDevs} style={styles.searchButton}>
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
