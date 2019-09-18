import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import BreederTabNavigator from './BreederTabs';
import PublicStackNavigator from './PublicStack';

import { AuthChecker } from 'features';

const RootNavigator = createSwitchNavigator({
  AuthChecker: AuthChecker,
  Public: PublicStackNavigator,
  Breeder: BreederTabNavigator
}, {
    initialRouteName: 'AuthChecker'
});

export default createAppContainer(RootNavigator);