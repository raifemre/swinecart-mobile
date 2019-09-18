import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import BreederTabNavigator from './BreederTabs';
import PublicStackNavigator from './PublicStack';

import { AuthChecker } from 'screens';

const RootNavigator = createSwitchNavigator({
  AuthChecker: AuthChecker,
  Public: PublicStackNavigator,
  Breeder: BreederTabNavigator
}, {
    initialRouteName: 'Breeder'
});

export default createAppContainer(RootNavigator);