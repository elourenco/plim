import React, { Component } from 'react';
import {
  View, Button
} from 'react-native';
import { connect } from 'react-redux';

class NumberCellValidationScreen extends Component {
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
        <Button onPress={this.nextPreprocess.bind(this)} title="proximo" />
      </View>
    );
  }
}

export default connect()(NumberCellValidationScreen);