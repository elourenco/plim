import React, { Component } from 'react';
import { View, ActivityIndicator, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import LoadingView from '../../components/loading-view';
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
      <LoadingView />
    );
  }
}

export default connect()(SplashScreen);