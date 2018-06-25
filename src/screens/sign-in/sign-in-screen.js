import React, { Component } from 'react';
import {
  View, ActivityIndicator, Alert, TextInput, BackHandler
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { bindActionCreators } from 'redux';
import { Button, Label, Text, Item, Input } from 'native-base';
import { connect } from 'react-redux';
import { signActions } from '../../redux/actions';
import { hasIsNullOrEmpty } from '../../helpers/object-helper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './sign-in-style';

class SignInScreen extends Component {
  static navigationOptions = {
    title: 'Login',
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      email: '',
      password: ''
    };
  };

  signInEmailAndPassword(e) {
    this.props.signInProfile(e.email, e.password)
      .then(() => {
        this.props.navigation.navigate('MainContainers');
      })
      .catch(e => {
        console.log(e);
        this.setState({password: ''}, () => {
          alert('E-mail ou senha invalida');
        })
      })
  };

  renderLoadingInButton() {
    const { loading } = this.props.profile;
    if (loading) {
      return <ActivityIndicator size="small" color="#fff" />
    }

    return <Text>Acessar</Text>
  }

  render() {
    return (
      <LinearGradient colors={['#0084ec', '#00b9fa', '#fff']} style={styles.container}>

        <Item floatingLabel>
          <Label style={{ color: 'white' }} >E-mail</Label>
          <Input style={styles.textInput}
            autoCapitalize='none'
            autoCorrect={false}
            autoFocus={false}
            keyboardType='email-address'
            value={this.state.email}
            onChangeText={(text) => this.setState({ email: text })}
          />
        </Item>
        <Item floatingLabel>
          <Label style={{ color: 'white' }} >Senha</Label>
          <Input style={styles.textInput}
            secureTextEntry={true}
            value={this.state.password}
            onChangeText={(text) => this.setState({ password: text })}
          />
        </Item>
        <View style={{ marginTop: 10 }}>
          <Button
            block
            disabled={hasIsNullOrEmpty(this.state)}
            onPress={(e) => this.signInEmailAndPassword(this.state)}>
            {this.renderLoadingInButton()}
          </Button>
        </View>
      </LinearGradient>
    );
  }
};

function mapStateToProps(state) {
  return {
    profile: state.profile
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(signActions.actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);