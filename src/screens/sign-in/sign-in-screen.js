import React, { Component } from 'react';
import {
  View, ActivityIndicator, Alert, TextInput, BackHandler
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { bindActionCreators } from 'redux';
import { Button, Label, Text } from 'native-base';
import { connect } from 'react-redux';
import { authUpActions } from '../../redux/actions';
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

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
  }
  onBackPress = () => {
    const { dispatch, nav } = this.props;
    if (nav.index === 0) {
      return false;
    }
    dispatch(NavigationActions.back());
    return true;
  };

  userLogin(e) {
    if (this.state.email != '' || this.state.password != '') {

      this.props.onLogin(this.state.email, this.state.password)

      e.preventDefault();

    } else {
      Alert.alert('Plimm', 'Digita seu usuario e senha.',
        [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
        { cancelable: false }
      )
    }
  };

  renderLoadingInButton() {
    const { isLoading } = this.props;
    if (isLoading) {
      return <ActivityIndicator size="small" color="#fff" />
    }

    return <Text>Acessar</Text>
  }

  renderErrorMessage() {
    const { error, isLoading } = this.props;
    if (error && !isLoading) {
      return <Text>{error}</Text>
    } else {
      return <Text />
    }
  }

  render() {
    const { isLoading, isLogged } = this.props;

    return (
      <LinearGradient colors={['#0084ec', '#00b9fa', '#fff']} style={styles.container}>
        <View style={styles.icon}>
          <Icon
            name="lock"
            size={100}
            color="#fff"
          />
        </View>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            editable={!isLoading}
            placeholder='E-mail'
            autoCapitalize='none'
            autoCorrect={false}
            autoFocus={true}
            keyboardType='email-address'
            value={this.state.email}
            onChangeText={(text) => this.setState({ email: text })} />
        </View>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            editable={!isLoading}
            placeholder='Senha'
            autoCapitalize='none'
            autoCorrect={false}
            secureTextEntry={true}
            value={this.state.password}
            onChangeText={(text) => this.setState({ password: text })} />
        </View>
        <View style={{ marginTop: 5 }}>
          <Button
            block
            disabled={isLoading}
            onPress={(e) => this.userLogin(e)}>
            {this.renderLoadingInButton()}
          </Button>
          {this.renderErrorMessage()}
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
  return bindActionCreators(authUpActions.actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);