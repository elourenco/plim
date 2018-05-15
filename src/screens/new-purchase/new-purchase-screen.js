import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Button, Item, Input, Label, Text } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import lnBackgroundColor from '../../config/linear-gradient-colors';

import styles from './new-purchase-style';

class NewPurchaseScreen extends Component {
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
          <Input style={{ color: 'white', textAlign: 'center' }} />
        </Item>
        <Button style={{ margin: 50 }} block>
          <Text>COMPRAR</Text>
        </Button>
      </LinearGradient>
    );
  }
}

export default connect()(NewPurchaseScreen);