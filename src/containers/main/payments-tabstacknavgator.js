import React from 'react';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/EvilIcons';
import PaymentScreen from '../../screens/payments/payment-screen';

export default StackNavigator(
  {
    Payments: { screen: PaymentScreen }
  }, {
    initialRouteName: 'Payments',
    navigationOptions: {
      gesturesEnabled: false,
      showLabel: false,
      headerTintColor: '#ffff',
      headerTitle: 'Pagamentos',
      headerStyle: {
        elevation: 0,
        backgroundColor: '#0084ec',
        borderBottomWidth: 0
      },
      tabBarLabel: 'Pagamentos',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="credit-card" size={28} color={tintColor} />
      ),
    }
  }
);