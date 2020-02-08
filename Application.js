import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { createAppContainer } from 'react-navigation';
import Navigator from './source/Navigation/Navigation';
import { Provider } from 'react-redux';
import configureStore from './source/ReduxClasses/Store/ConfigureStore';
import Colors from './source/Utils/Colors';

let Store = configureStore();

export default class Application extends Component {
  constructor(props) {
    super(props);
    this.state = { appState: undefined };
  }

  shouldComponentUpdate(props, state) {
    return this.state.appState !== state.appState;
  }

  render() {
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
