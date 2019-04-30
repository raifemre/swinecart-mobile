import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import AuthChecker from '../../screens/AuthChecker';

import BreederTabNavigator from './BreederTabs';
import CustomerStackNavigator from './CustomerTabs';
import PublicStackNavigator from './PublicStack';

const RootNavigator = createSwitchNavigator({
  AuthChecker: AuthChecker,
  Public: PublicStackNavigator,
  Customer: CustomerStackNavigator,
  Breeder: BreederTabNavigator
}, {
  initialRouteName: 'AuthChecker'
});


export default createAppContainer(RootNavigator);