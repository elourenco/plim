import { SwitchNavigator } from 'react-navigation';
import AuthContainers from '../containers/auth';
import MainContainers from '../containers/main';
import SplashScreen from '../screens/splash/splash-screen';

const routeConfigs = {
  SplashScreen,
  AuthContainers,
  MainContainers
};

const navigatorConfig = {
  initialRouteName: 'SplashScreen'
};

export default SwitchNavigator(routeConfigs, navigatorConfig);