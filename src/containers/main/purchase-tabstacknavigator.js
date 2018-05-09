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
    headerTitle: 'Nova comprar',
    headerStyle: {
      backgroundColor: '#0084ec',
      borderBottomWidth: 0
    },
    tabBarLabel: 'Comprar',
    tabBarIcon: ({ tintColor, active }) => (
      <Icon
        name="cart"
        size={28}
        color={tintColor}
        style={{
        shadowOffset: { width: 0, height: 0 },
        shadowColor: '#0084ec',
        shadowOpacity: 0.3,
      }}
      />
    ),
  }
});