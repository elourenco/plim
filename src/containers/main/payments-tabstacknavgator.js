import React from 'react';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Template from '../../screens/template';

export default StackNavigator(
  {
    Demo: { screen: Template }
  }, {
    initialRouteName: 'Demo',
    navigationOptions: {
      gesturesEnabled: false,
      showLabel: false,
      headerTintColor: '#ffff',
      headerTitle: 'Pagamentos',
      headerStyle: {
        backgroundColor: '#15629b'
      },
      tabBarLabel: 'Pagamentos',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="payment" size={28} color={tintColor} />
      ),
    }
  }
);