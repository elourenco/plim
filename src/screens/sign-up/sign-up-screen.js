import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import MultiStep from '../../components/multi-step';
import ProfileValidationScreen from './validation-steps/profile-validation-screen';
import AddressValidationScreen from './validation-steps/address-validation-screen';
import NumberCellValidationScreen from './validation-steps/number-cell-validation-screen';
import SMSTokenReceiverValidationScreen from './validation-steps/sms-token-receiver-validation-screen';
import styles from './sign-up-style';

class SignUpScreen extends Component {
  componentWillMount() {
    this.stepsScreens = [
      { name: 'ProfileValidationScreen', component: <ProfileValidationScreen /> },
      { name: 'AddressValidationScreen', component: <AddressValidationScreen /> },
      { name: 'NumberCellValidationScreen', component: <NumberCellValidationScreen /> },
      { name: 'SMSTokenReceiverValidationScreen', component: <SMSTokenReceiverValidationScreen /> },
    ];
  }

  finish(wizardState) {
    this.props.navigation.navigate('MainContainers');
  }

  render() {
    return (
      <LinearGradient colors={['#0084ec', '#00b9fa', '#fff']} style={styles.container}>
        <MultiStep
          steps={this.stepsScreens}
          onFinish={this.finish.bind(this)} />
      </LinearGradient>
    );
  }
}

export default connect()(SignUpScreen);