import React from 'react';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ListFundersScreen from '../../screens/list-funders/list-funders-screen';

export default StackNavigator(
  {
    ListFunders: { screen: ListFundersScreen }
  }, {
    initialRouteName: 'ListFunders',
    navigationOptions: {
      gesturesEnabled: false,
      showLabel: false,
      headerTintColor: '#ffff',
      headerStyle: {
        backgroundColor: '#0084ec',
        borderBottomWidth: 0
      },
      tabBarLabel: 'Financiadoras',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="attach-money" size={28} color={tintColor} />
      ),
    }
  }
);