import React from 'react';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/EvilIcons';
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