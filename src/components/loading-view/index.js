import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import lnBackgroundColor from '../../config/linear-gradient-colors';

export default class LoadingView extends Component {
  render() {
    return (
      <LinearGradient
        colors={lnBackgroundColor.backgroundColor}
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#FFF',
        }}>
        <ActivityIndicator size="small" color="#fff" />
      </LinearGradient>
    );
  }
}
