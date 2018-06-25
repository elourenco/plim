import React, { Component } from 'react';
import { View, Keyboard, Alert } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { purchaseActions } from '../../redux/actions';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Button, Text, Item, Label, Input } from 'native-base';
import LoadingView from '../../components/loading-view';
import LinearGradient from 'react-native-linear-gradient';
import lnBackgroundColor from '../../config/linear-gradient-colors';

import styles from './secret-code-style';

class SecretCodeScreen extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      secretCode: ''
    };
  };

  confirm(code, purchase, funder) {
    if(this.state.secretCode === '00000000') {
      this.props.makePurchases(code, purchase, funder).then(() => {
        Alert.alert('Compra', 'Compra Realizado com sucesso',
        [{text: 'OK', onPress: () => this.props.navigation.navigate('PurchaseTab')}],
        { cancelable: false }
      );
      })
    } else {
      Alert.alert('Código Secreto', 'Código inválido',
        [{text: 'OK'}],
        { cancelable: false }
      );
    }
  }

  render() {
    const { params } = this.props.navigation.state;
    const funder = this.props.funder;

    return (
      <LinearGradient colors={lnBackgroundColor.backgroundColor} style={styles.container}>
        <View style={styles.content}>
          <Item floatingLabel style={styles.item}>
            <Label style={{ color: 'white', textAlign: 'center' }} >DIGITA O CÓDIGO SEGRETO</Label>
            <Input style={{ color: 'white', textAlign: 'center' }}
              autoFocus={true}
              maxLength={8}
              secureTextEntry={true}
              keyboardType='numeric'
              value={this.state.secretCode}
              onChangeText={(text) => {
                if (text.length == 8) {
                  this.setState({ secretCode: text })
                  Keyboard.dismiss()
                }
              }}/>
          </Item>
        </View>
        <View style={styles.actions}>
          <Button style={{ margin: 15 }}
            block
            info
            onPress={() => { this.props.navigation.goBack() }}>
            <Text>CANCELAR</Text>
          </Button>
          <Button style={{ margin: 15 }}
            block
            Success
            onPress={() => this.confirm(params.codePurchase, params.purchase, funder)}>
            <Text>CONFIRMAR</Text>
          </Button>
        </View>
      </LinearGradient>
    );
  }
}

function mapStateToProps(state) {
  return {
    profile: state.profile,
    funder: state.purchase.funderSelected
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(purchaseActions.actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SecretCodeScreen);