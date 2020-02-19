import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Main from "./pages/Main";
import Profile from "./pages/Profile";
import TesteLottie from "./pages/TesteLottie";
import { createBottomTabNavigator } from "react-navigation-tabs";

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

const RoutesButton = createBottomTabNavigator({
  TesteLottie: {
    screen: TesteLottie,
    navigationOptions: {
      title: "Testando Animações"
    }
  },
  App: {
    name: "APP",
    screen: createAppContainer(RoutesStack)
  }
});

export default createAppContainer(RoutesButton);
