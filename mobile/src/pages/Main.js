import React, { useEffect, useState } from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import {
  requestPermissionsAsync,
  getCurrentPositionAsync
} from "expo-location";

function Main({ navigation }) {
  const [currentPosition, setCurrentPosition] = useState(null);

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

  if (!currentPosition) {
    return null;
  }
  return (
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
  );
}

const styles = StyleSheet.create({
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
