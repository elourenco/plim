import React from 'react';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/EvilIcons';
import NewPurchaseScreen from '../../screens/new-purchase/new-purchase-screen';
import ListFundersScreen from '../../screens/list-funders/list-funders-screen';
import PurchaseOrderScreen from '../../screens/purchase-order/purchase-order-screen';


export default StackNavigator({
  ListFunders: { screen: ListFundersScreen },
  NewPurchase: { screen: NewPurchaseScreen },
  PurchaseOrder: { screen: PurchaseOrderScreen}
}, {
  initialRouteName: 'ListFunders',
  navigationOptions: {
    headerTintColor: '#ffff',
    headerStyle: {
      elevation: 0,
      backgroundColor: '#0084ec',
      borderBottomWidth: 0,
    },
    tabBarLabel: 'Comprar',
    tabBarIcon: ({ tintColor, active }) => (
      <Icon name="cart" size={28} color={tintColor} />
    ),
  }
});