import React, { Component } from 'react';
import {
  View, ActivityIndicator, Alert
} from 'react-native';
import { bindActionCreators } from 'redux';
import { Button, Item, Input, Label, Text } from 'native-base';
import { connect } from 'react-redux';
import { authUpActions } from '../../../redux/actions';
import { hasIsNullOrEmpty } from '../../../helpers/object-helper';

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

  signUpAndNextPreprocess() {
    const { password, confPassword } = this.state;
    if (!hasIsNullOrEmpty(this.state)) {
      if (password === confPassword) {
        this.props.signUpProfile(this.state)
          .then(() => {
            this.props.nextFn();
          })
          .catch(err => {
            if (this.props.profile.error) {
              Alert.alert('Cadastro', this.props.profile.error,
                [{ text: 'OK'}], { cancelable: false });
            }
          });
      } else {
        Alert.alert('Cadastro', 'Senha não confere.',
          [{ text: 'OK' }], { cancelable: false });
      }
    } else {
      Alert.alert('Cadastro', 'Por favor, preencha todos os campos.',
        [{ text: 'OK' }], { cancelable: false });
    }

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

  render() {
    return (
      <View style={{ margin: 10 }}>
        <Item floatingLabel>
          <Label style={{ color: 'white' }} >CPF</Label>
          <Input style={{ color: 'white' }}
            keyboardType="numeric"
            autoFocus={true}
            maxLength={11}
            value={this.state.cpf}
            onChangeText={(text) => this.setState({ cpf: text })}
            onEndEditing={(e) => console.log('>>>>>', e.nativeEvent.text)} />
        </Item>
        <Item floatingLabel>
          <Label style={{ color: 'white' }} >Nome completo</Label>
          <Input style={{ color: 'white' }}
            value={this.state.name}
            onChangeText={(text) => this.setState({ name: text })} />
        </Item>
        <Item floatingLabel>
          <Label style={{ color: 'white' }} >E-mail</Label>
          <Input style={{ color: 'white' }}
            keyboardType="email-address"
            autoCapitalize='none'
            autoCorrect={false}
            value={this.state.email}
            onChangeText={(text) => this.setState({ email: text })} />
        </Item>
        <Item floatingLabel>
          <Label style={{ color: 'white' }} >Senha</Label>
          <Input style={{ color: 'white' }}
            keyboardType="default"
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
        <Button style={{ marginTop: 50 }}
          disabled={hasIsNullOrEmpty(this.state)}
          full
          onPress={() => this.signUpAndNextPreprocess()} >
          {this.renderLoadingInButton()}
        </Button>
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


export default connect(mapStateToProps, mapDispatchToProps)(ProfileValidationScreen);