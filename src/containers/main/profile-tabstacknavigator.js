import React from 'react';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/EvilIcons';
import ProfileScreen from '../../screens/profile/profile-screen';

export default StackNavigator(
  {
    Profile: { screen: ProfileScreen }
  }, {
    initialRouteName: 'Profile',
    navigationOptions: {
      gesturesEnabled: false,
      showLabel: false,
      headerTintColor: '#ffff',
      headerTitle: 'Perfil',
      headerStyle: {
        elevation: 0,
        backgroundColor: '#0084ec',
        borderBottomWidth: 0
      },
      tabBarLabel: 'Perfil',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="user" size={28} color={tintColor} />
      ),
    }
  }
);