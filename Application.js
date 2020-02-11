import React, {Component} from 'react';
import {View, StatusBar} from 'react-native';
import {createAppContainer} from 'react-navigation';
import Navigator from './source/Navigation/Navigation';
import {Provider} from 'react-redux';
import configureStore from './source/ReduxClasses/Store/ConfigureStore';
import {GoogleSignin} from '@react-native-community/google-signin';

let Store = configureStore();

export default class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {appState: undefined};
    this._getCurrentUser();
  }

  shouldComponentUpdate(props, state) {
    return this.state.appState !== state.appState;
  }

  async _getCurrentUser() {
    try {
      const userInfo = await GoogleSignin.signInSilently();
      this.setState({appState: userInfo !== undefined ? '1' : '0'});
    } catch (error) {
      this.setState({appState: '0'});
    }
  }

  render() {
    if (this.state.appState === undefined) {
      return <View />;
    } else {
      const RootNavigator = createAppContainer(Navigator(this.state.appState));
      return (
        <Provider store={Store}>
          <StatusBar
            backgroundColor={'#333951'}
            animated={true}
            barStyle="light-content"
          />
          <RootNavigator />
        </Provider>
      );
    }
  }
}
