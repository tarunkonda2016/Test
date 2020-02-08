/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import Application from './Application';
import {name as appName} from './app.json';
import {enableScreens} from 'react-native-screens';
enableScreens();
console.disableYellowBox = true;
AppRegistry.registerComponent(appName, () => Application);
