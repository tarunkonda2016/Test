import { createStackNavigator } from 'react-navigation-stack';
import { Routes } from './Routes';
import Colors from '../Utils/Colors';

const Navigator = loggedIn =>
  createStackNavigator(
    Routes,
    {
      initialRouteName: 'App',
      mode: 'card',
    },
    {
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#C2C2C2',
        },
        headerTintColor: Colors.white,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    },
  );
export default Navigator;
