import { TabNavigator, TabBarBottom } from 'react-navigation';

import PurchaseTabStackNavigation from './purchase-tabstacknavigator';
import FundersTabStackNavigation from './funders-tabstacknavigator';
import WalletTabStackNavigation from './wallet-tabstacknavigator';
import PaymentsTabStackNavigation from './payments-tabstacknavgator';
import ProfileTabStackNavigation from './profile-tabstacknavigator';

const routerTabNavigator = {
  PurchaseTab: {
    screen: PurchaseTabStackNavigation
  },
  FundersTab: {
    screen: FundersTabStackNavigation
  },
  WalletTab: {
    screen: WalletTabStackNavigation
  },
  PaymentsTab: {
    screen: PaymentsTabStackNavigation
  },
  ProfileTab: {
    screen: ProfileTabStackNavigation
  }
};

const configTabNavigator = {
  initialRouteName: 'PurchaseTab',
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  animationEnabled: false,
  lazy: true,
  tabBarOptions: {
    showIcon: true,
    showLabel: true, 
    labelStyle: {
      fontSize: 9,
      shadowOffset: { width: 0, height: 0 },
      shadowColor: '#0084ec',
      shadowOpacity: 0.3,
    },
    style: {
      backgroundColor: '#fff',
      borderTopWidth: 0,
      shadowOffset: { width: 0, height: 0 },
      shadowColor: '#0084ec',
      shadowOpacity: 0.3
    },
    pressOpacity: 2,
    animationEnabled: true
  }
};

export default TabNavigator(routerTabNavigator, configTabNavigator);