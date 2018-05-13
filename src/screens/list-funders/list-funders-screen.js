import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Button, Item, Input, Label, Text } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './list-funders-style';

class ListFundersScreen extends Component {
  static navigationOptions = {
    title: 'Financiadoras',
  };

  render() {
    return (
      <LinearGradient colors={['#0084ec', '#00b9fa', '#fff']} style={styles.container}>
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
        <Button
          style={{ margin: 50 }}
          block
        >
          <Text>COMPRAR</Text>
        </Button>
      </LinearGradient>
    );
  }
}

export default connect()(ListFundersScreen);