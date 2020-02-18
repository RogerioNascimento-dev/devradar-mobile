import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Main from "./pages/Main";
import Profile from "./pages/Profile";
import { Button } from "react-native";
import React from "react";

const Routes = createAppContainer(
  createStackNavigator(
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
  )
);

export default Routes;
