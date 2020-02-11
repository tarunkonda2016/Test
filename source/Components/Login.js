import React, {Component} from 'react';
import {Text, View, StyleSheet, Alert} from 'react-native';
let webClientId =
  '205147856239-sin80qbnbrtmprhrsqh59q9vn0nmor85.apps.googleusercontent.com';

import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';

export default class Login extends Component {
  state = {
    userInfo: null,
    error: null,
  };

  async componentDidMount() {
    this._configureGoogleSignIn();
    // await this._getCurrentUser();
  }

  _configureGoogleSignIn() {
    GoogleSignin.configure({
      webClientId: webClientId,
      offlineAccess: false,
    });
  }

  async _getCurrentUser() {
    try {
      const userInfo = await GoogleSignin.signInSilently();
      this.setState({userInfo, error: null});
    } catch (error) {
      const errorMessage =
        error.code === statusCodes.SIGN_IN_REQUIRED
          ? 'Please sign in :)'
          : error.message;
      this.setState({
        error: new Error(errorMessage),
      });
    }
  }

  _signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      this.setState({userInfo, error: null});
      this.props.navigation.navigate('App');
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // sign in was cancelled
        Alert.alert('cancelled');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation in progress already
        Alert.alert('in progress');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        Alert.alert('play services not available or outdated');
      } else {
        console.log('error', error);

        Alert.alert('Something went wrong', error.toString());
        this.setState({
          error,
        });
      }
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={{color: '#FFF', marginBottom: 30, fontSize: 20}}>
          Login with your Gmail account
        </Text>
        <GoogleSigninButton
          style={{marginVertical: 40}}
          size={GoogleSigninButton.Size.Standard}
          color={GoogleSigninButton.Color.Auto}
          onPress={this._signIn}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#333951',
  },
});
