import React from "react";
import {
  Image,
  Button,
  StyleSheet,
  Dimensions,
  View,
  TouchableOpacity
} from "react-native";
import App from '../Components/App'
import Tab2 from '../Components/Tab2'
import { createDrawerNavigator } from "react-navigation-drawer";
import { createBottomTabNavigator } from "react-navigation-tabs";
import NavigationButtons from "./NavigationButtons";


let { width } = Dimensions.get("window");


const CustomDrawerContentComponent = props => (
  <View style={{ flex: 1 }}>
    <NavigationButtons style={{ flex: 1 }} {...props} />
  </View>
);

export const bottomTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: App,
      navigationOptions: {
        tabBarLabel: "Dashboard",
        tabBarIcon: ({ focused }) => {
          const iconimg = require("../Images/Dashboard.png");
          return <Image source={iconimg} style={styles.tabIcon} />;
        }
      }
    },
    Tab2: {
      screen: Tab2,
      navigationOptions: {
        tabBarLabel: "Household",
        tabBarIcon: ({ focused }) => {
          const iconimg = require("../Images/Household.png");
          return <Image source={iconimg} style={styles.tabIcon} />;
        }
      }
    },
  },
  {
    initialRouteName: "Home"
  }
);



const DrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: bottomTabNavigator
    }
  },
  {
    initialRouteName: "Home",
    contentComponent: navigation => CustomDrawerContentComponent(navigation),
    drawerType: "front",
    drawerWidth: "65%",
    edgeWidth: width * 0.25,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Dashboard',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#333951',
      },
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Image
            source={{ uri: 'https://2019.igem.org/wiki/images/3/38/T--Linkoping_Sweden--Hamburger.jpg' }}
            style={{
              width: 30,
              height: 30,
              resizeMode: "contain",
              align: "right",
              marginHorizontal: 10,
            }}
          />
        </TouchableOpacity>
      )
    })
  }
);


export const Routes = {
  App: {
    screen: DrawerNavigator,

  }
};
const styles = StyleSheet.create({
  tabIcon: {
    width: 23,
    height: 23
  }
});
export default Routes;
