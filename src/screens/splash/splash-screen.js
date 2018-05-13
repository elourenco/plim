import React, { Component } from 'react';
import { View, ActivityIndicator, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import lnBackgroundColor from '../../config/linear-gradient-colors';
import styles from './splash-style';

class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.bootstrapAsync();
  }

  async bootstrapAsync() {
    const userUID = await AsyncStorage.getItem('@user.uid');
    if (userUID) {
      this.props.navigation.navigate('MainContainers');
    } else {
      this.props.navigation.navigate('AuthContainers');
    }
  }

  render() {
    return (
      <LinearGradient colors={lnBackgroundColor.backgroundColor} style={styles.container}>
        <ActivityIndicator size="small" color="#fff" />
      </LinearGradient>
    );
  }
}

export default connect()(SplashScreen);