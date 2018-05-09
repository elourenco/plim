import React, { Component } from 'react';
import {
  View, Button
} from 'react-native';
import { connect } from 'react-redux';

class Template extends Component {
  constructor(props) {
    super(props);
  }

  nextPreprocess() {
    this.props.saveState(0, { key: '0' });
    this.props.nextFn();
  }
  previousPreprocess() {
    this.props.prevFn();
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
 
      </View>
    );
  }
}

export default connect()(Template);