import React from 'react';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import NewPurchaseScreen from '../../screens/new-purchase/new-purchase-screen';

export default StackNavigator({
  NewPurchase: { screen: NewPurchaseScreen }
}, {
  initialRouteName: 'NewPurchase',
  navigationOptions: {
    headerTintColor: '#ffff',
    headerStyle: {
      backgroundColor: '#0084ec',
      borderBottomWidth: 0,
    },
    tabBarLabel: 'Comprar',
    tabBarIcon: ({ tintColor, active }) => (
      <Icon name="cart" size={28} color={tintColor} />
    ),
  }
});