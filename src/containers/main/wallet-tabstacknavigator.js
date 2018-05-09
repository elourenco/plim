import React from 'react';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Template from '../../screens/template';

export default StackNavigator(
  {
    Demo: { screen: Template }
  },
  {
    initialRouteName: 'Demo',
    navigationOptions: {
      gesturesEnabled: false,
      showLabel: false,
      headerTintColor: '#ffff',
      headerTitle: 'Minha Carteira',
      headerStyle: {
        backgroundColor: '#15629b'
      },
      tabBarLabel: 'Minha Carteira',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="wallet" size={28} color={tintColor} />
      ),
    }
  }
);