import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { WebView } from "react-native-webview";

function DevradarFrontend() {
  return (
    <SafeAreaView style={{ flex: 1, marginTop: 25 }}>
      <WebView
        originWhitelist={["*"]}
        source={{ uri: "https://devradar-app-frontend.herokuapp.com" }}
        style={{ flex: 1 }}
      />
    </SafeAreaView>
  );
}

export default DevradarFrontend;
