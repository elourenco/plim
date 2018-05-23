import React, { Component } from 'react';
import {
  View, Button, StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import lnBackgroundColor from '../../config/linear-gradient-colors';

import styles from './purchase-order-style';

class PurchaseOrder extends Component {
  render() {
    return (
      <LinearGradient colors={lnBackgroundColor.backgroundColor} style={styles.container}>
 
      </LinearGradient>
    );
  }
}

export default connect()(PurchaseOrder);