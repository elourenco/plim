import React, { Component } from 'react';
import {
  View, ActivityIndicator
} from 'react-native';
import { bindActionCreators } from 'redux';
import { Button, Item, Input, Label, Text } from 'native-base';
import { connect } from 'react-redux';
import { authUpActions } from '../../../redux/actions';

class ProfileValidationScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cpf: '',
      name: '',
      email: '',
      password: '',
      confPassword: ''
    }
  }

  checkProperties(obj) {
    for (var key in obj) {
      if (obj[key] !== null && obj[key] != "") {
        return false;
      }
    }
    return true;
  }

  signUpAndNextPreprocess() {
    // this.props.saveState(0, { key: '0' });
    // this.props.nextFn();
    this.props.signUpProfile(this.state);
  }
  previousPreprocess() {
    this.props.prevFn();
  }

  renderLoadingInButton() {
    const { loading } = this.props.profile;
    if (loading) {
      return <ActivityIndicator size="small" color="#fff" />
    }

    return <Text>Proximo</Text>
  }

  renderErrorMessage() {
    const { error, loading } = this.props;
    if (error && !loading) {
      return <Text>{error}</Text>
    }
    return <Text />
  }
;
  render() {
    return (
      <View style={{ margin: 10 }}>
        <Item floatingLabel>
          <Label style={{ color: 'white' }} >CPF</Label>
          <Input style={{ color: 'white' }} keyboardType="numeric" 
          value={this.state.cpf}
          onChangeText={(text) => this.setState({ cpf: text })}/>
        </Item>
        <Item floatingLabel>
          <Label style={{ color: 'white' }} >Nome completo</Label>
          <Input style={{ color: 'white' }} 
          value={this.state.name}
          onChangeText={(text) => this.setState({ name: text })}/>
        </Item>
        <Item floatingLabel>
          <Label style={{ color: 'white' }} >E-mail</Label>
          <Input style={{ color: 'white' }}
          autoCapitalize="none"
          keyboardType="email-address"
          value={this.state.email}
          onChangeText={(text) => this.setState({ email: text })} />
        </Item>
        <Item floatingLabel>
          <Label style={{ color: 'white' }} >Senha</Label>
          <Input style={{ color: 'white' }}
            secureTextEntry={true}
            value={this.state.password}
            onChangeText={(text) => this.setState({ password: text })} />
        </Item>
        <Item floatingLabel>
          <Label style={{ color: 'white' }} >Confirma a senha</Label>
          <Input style={{ color: 'white' }}
            keyboardType="default"
            secureTextEntry={true}
            value={this.state.confPassword}
            onChangeText={(text) => this.setState({ confPassword: text })} />
        </Item>
        <Button style={{ marginTop: 50 }} disabled={this.checkProperties(this.state)} full rounded onPress={() => this.signUpAndNextPreprocess()} >
          {this.renderLoadingInButton()}
        </Button>
        <Text>{this.renderErrorMessage()}</Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    profile: state.signUp
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(authUpActions.actions, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(ProfileValidationScreen);