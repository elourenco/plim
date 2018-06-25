import React, { Component } from 'react';
import {
  View, Button, StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import lnBackgroundColor from '../config/linear-gradient-colors';

class Template extends Component {
  render() {
    return (
      <LinearGradient colors={lnBackgroundColor.backgroundColor} style={styles.container}>
 
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  }
});

export default connect()(Template);