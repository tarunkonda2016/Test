import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

import {GoogleSignin} from '@react-native-community/google-signin';

export default class NavigationButtons extends Component {
  common() {
    return (
      <View
        style={{
          marginVertical: 25,
          height: 5,
          width: 150,
          backgroundColor: '#C2C2C2',
        }}
      />
    );
  }

  _signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      this.props.navigation.navigate('Login');
    } catch (error) {
      this.props.navigation.navigate('Login');
    }
  };

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#333951', alignItems: 'center'}}>
        <View style={{margin: 40}}>
          <View
            style={{
              alignSelf: 'center',
              height: 50,
              width: 50,
              borderRadius: 25,
              backgroundColor: '#C5C5C5',
            }}
          />

          <View
            style={{
              marginTop: 20,
              height: 5,
              width: 150,
              backgroundColor: '#C2C2C2',
            }}
          />

          {this.common()}
          {this.common()}
          {this.common()}
          {this.common()}

          <Button title={'signOut'} onPress={this._signOut} />
        </View>
      </View>
    );
  }
}
