import React, { Component } from 'react';
import { View, ActivityIndicator, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';

import styles from './sign-in-style';

class SignInScreen extends Component {
  constructor(props) {
    super(props);
    this.bootstrapAsync();
  }

  bootstrapAsync() {
    // const userToken = await AsyncStorage.getItem('userToken');
    // this.props.navigation.navigate('AuthContainers');
  }

  render() {
    return (
      <View style={styles.container}>

      </View>
    );
  }
}

export default connect()(SignInScreen);