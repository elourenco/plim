import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View } from 'react-native';
import { Button, Item, Input, Label, Text } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import lnBackgroundColor from '../../config/linear-gradient-colors';
import { hasIsNullOrEmpty } from '../../helpers/object-helper';
import { purchaseActions } from '../../redux/actions';

import styles from './new-purchase-style';

class NewPurchaseScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    return {
      title: params ? params.name : 'Nova Compra',
    }
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      codePurchase: ''
    };
  };

  validatePurchase() {
    console.log('ValidatePurchase: ', this.state.codePurchase);
    this.props.validatePurchase(this.state.codePurchase);
  }

  render() {
    return (
      <LinearGradient colors={lnBackgroundColor.backgroundColor} style={styles.container}>
        <Icon
          name="cart-outline"
          size={100}
          color="#fff"
          style={styles.icon}
        />
        <Item floatingLabel style={styles.item}>
          <Label style={{ color: 'white', textAlign: 'center' }} >DIGITA O CÓDIGO DA COMPRA</Label>
          <Input style={{ color: 'white', textAlign: 'center' }}
          autoFocus={true}
          maxLength={18}
          value={this.state.codePurchase}
          onChangeText={(text) => this.setState({ codePurchase: text })}
          />
        </Item>
        <Button style={{ margin: 50 }} 
          block
          disabled={hasIsNullOrEmpty(this.state)}
          onPress={() => this.validatePurchase()}>
          <Text>COMPRAR</Text>
        </Button>
      </LinearGradient>
    );
  }
}

function mapStateToProps(state) {
  return {
    profile: state.profile,
    purchase: state.purchase
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(purchaseActions.actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPurchaseScreen);