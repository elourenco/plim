import React from 'react';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
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
        backgroundColor: '#0084ec',
        borderBottomWidth: 0
      },
      tabBarLabel: 'Minha Carteira',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="wallet" size={20} color={tintColor} />
      ),
    }
  }
);