import React, { Component } from 'react';
import {
  View, Button
} from 'react-native';
import { connect } from 'react-redux';

class AddressValidationScreen extends Component {
  constructor(props) {
    super(props);
  }

  nextPreprocess() {
    // this.props.saveState(1, { key: '1' });
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

export default connect()(AddressValidationScreen);