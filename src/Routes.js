import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { FontAwesome, Entypo } from "@expo/vector-icons";
import React from "react";

import Main from "./pages/Main";
import Profile from "./pages/Profile";
import DevradarFrontend from "./pages/DevradarFrontend";

const RoutesStack = createStackNavigator(
  {
    Main: {
      screen: Main,
      navigationOptions: {
        title: "DevRadar"
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        title: "Perfil no Github"
      }
    }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#7159c1"
      },
      headerTintColor: "#FFF",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

const bottonNavigarions = createBottomTabNavigator(
  {
    Principal: {
      screen: createAppContainer(RoutesStack),
      navigationOptions: {
        title: "Devs no mapa",
        tabBarIcon: <FontAwesome color="#FFF" size={25} name="map-marker" />
      }
    },
    DevradarFrontend: {
      screen: DevradarFrontend,
      navigationOptions: {
        title: "Adicionar",
        tabBarIcon: <Entypo color="#FFF" name="add-to-list" size={25} />
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: "#FFF",
      inactiveTintColor: "#ccc",

      labelStyle: {
        fontSize: 15
      },
      style: {
        backgroundColor: "#7159c1"
      }
    }
  }
);
//export default createAppContainer(RoutesStack);
export default createAppContainer(bottonNavigarions);
