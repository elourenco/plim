import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import { Button, Text } from 'native-base';
import styles from './introduction-style';

class IntroductionScreen extends Component {
  static navigationOptions = {
    title: '',
  };

  signUpOnPress() {
    this.props.navigation.navigate('SignUp');
  }

  signInOnPress() {
    this.props.navigation.navigate('SignIn');
  }

  render() {
    return (
      <LinearGradient colors={['#0084ec', '#00b9fa', '#fff']} style={styles.container}>
        <View style={styles.welcome}>
          <Text style={{color: '#fff', fontSize: 30}}>PLIMM</Text>
        </View>
        <View style={styles.tools}>
        <Button style={{ margin: 10 }} block primary onPress={() => this.signInOnPress()} >
            <Text>Acessar</Text>
          </Button>
          <Button style={{ margin: 10 }} block info onPress={() => this.signUpOnPress()} >
            <Text>Cadastrar</Text>
        </Button>
        </View>
      </LinearGradient>
    );
  }
}

export default connect()(IntroductionScreen);