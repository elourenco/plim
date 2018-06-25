import React, { Component } from 'react';
import {
  View
} from 'react-native';
import moment from 'moment';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button, Label, Text } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import lnBackgroundColor from '../../config/linear-gradient-colors';
import { purchaseActions } from '../../redux/actions';
import styles from './purchase-order-style';

class PurchaseOrder extends Component {

  confirmPurchase() {
    const { params } = this.props.navigation.state;
    const { purchase } = this.props.purchase
    this.props.navigation.navigate('SecretCodeScreen', { purchase, codePurchase: params.codePurchase });
  }

  render() {
    const { purchase } = this.props.purchase
    if (purchase) {
      return (
        <LinearGradient colors={lnBackgroundColor.backgroundColor} style={styles.container}>
          <View style={styles.infoHeaderPurchases}>
            <Text style={styles.fieldKey}>Loja: <Text style={styles.fieldValue}>{purchase.store.name}</Text></Text>
            <Text style={styles.fieldKey}>Endereço: <Text style={styles.fieldValue}>{purchase.store.location}</Text></Text>
            <Text style={styles.fieldKey}>Site: <Text style={styles.fieldValue}>{purchase.store.site}</Text></Text>
          </View>
          <View style={styles.infoPurchases}>
            <Text style={styles.fieldKey}>Produtos: <Text style={styles.fieldValue}>{purchase.description}</Text></Text>
            <Text style={styles.fieldKey}>Valor Total: <Text style={styles.fieldValue}>{purchase.price}</Text></Text>
            <Text style={styles.fieldKey}>Parcelas: <Text style={styles.fieldValue}>{purchase.numberOfLoop} x {purchase.price/purchase.numberOfLoop}</Text></Text>
            <Text style={styles.fieldKey}>Data da compra: <Text style={styles.fieldValue}>{ moment(purchase.createDate.toDate()).format("DD [de] MMMM, YYYY") }</Text></Text>
          </View>
          <Button style={{ margin: 15 }}
          block
          onPress={() => this.confirmPurchase()}>
            <Text>CONFIRMAR</Text>
          </Button>
        </LinearGradient>
      );
    }
    return (
      <LinearGradient colors={lnBackgroundColor.backgroundColor} style={styles.container} />);
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

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseOrder);