import React, { Component } from 'react';
import {
  View, ActivityIndicator, Alert
} from 'react-native';
import { bindActionCreators } from 'redux';
import { Button, Item, Input, Label, Text } from 'native-base';
import { connect } from 'react-redux';
import { authUpActions } from '../../../redux/actions';
import { checkProperties } from '../../../helpers/object-helper';

class AddressValidationScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cep: '',
      state: '',
      city: '',
      street: '',
      neighborhood: ''
    }
  }

  nextPreprocess() {
    // this.props.saveState(1, { key: '1' });
    this.props.nextFn();
  }

  previousPreprocess() {
    this.props.prevFn();
  }

  renderLoadingInButton() {
    const { loading } = this.props.profile;
    if (loading) {
      return <ActivityIndicator size="small" color="#fff" />
    }

    return <Text>Finalizar</Text>
  }

  renderErrorMessage() {
    const { error, loading } = this.props.profile;
    if (error && !loading) {
      return <Text>{error}</Text>
    }
    
    return <Text />
  }

  render() {
    return (
      <View style={{ margin: 10 }}>
        <Item floatingLabel>
          <Label style={{ color: 'white' }} >CEP</Label>
          <Input style={{ color: 'white' }}
            keyboardType="numeric"
            autoFocus={true}
            value={this.state.cpf}
            onChangeText={(text) => this.setState({ cpf: text })}
           />
        </Item>
        
        <Button style={{ marginTop: 50 }}
          disabled={!checkProperties(this.state)}
          full
          onPress={() => this.signUpAndNextPreprocess()} >
          {this.renderLoadingInButton()}
        </Button>
        <Text>{this.renderErrorMessage()}</Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    profile: state.profile
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(authUpActions.actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddressValidationScreen);