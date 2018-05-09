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
      headerTitle: 'Financiadoras',
      headerStyle: {
        backgroundColor: '#15629b'
      },
      tabBarLabel: 'Financiadoras',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="attach-money" size={28} color={tintColor} />
      ),
    }
  }
);