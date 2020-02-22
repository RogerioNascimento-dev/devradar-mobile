import React from "react";
import Routes from "./src/Routes";
import { StatusBar } from "react-native";
import DropdownAlert from "react-native-dropdownalert";
export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <DropdownAlert closeInterval={6000} />
      <Routes />
    </>
  );
}
