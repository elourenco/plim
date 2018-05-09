import { StackNavigator } from 'react-navigation';
import IntroductionScreen from '../../screens/introduction/introduction-screen';
import SignInScreen from '../../screens/sign-in/sign-in-screen';
import SignUpScreen from '../../screens/sign-up/sign-up-screen';

export default StackNavigator(
  {
    Introduction: { screen: IntroductionScreen },
    SignIn: { screen: SignInScreen },
    SignUp: { screen: SignUpScreen }
  }, {
    initialRouteName: 'Introduction',
    navigationOptions: {
      gesturesEnabled: false,
      showLabel: false,
      headerTintColor: '#ffff',
      headerTitle: 'Plimm',
      headerStyle: {
        backgroundColor: '#0084ec',
        borderBottomWidth: 0
      }
    }
  }
);