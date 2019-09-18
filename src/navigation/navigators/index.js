import { createSwitchNavigator, createAppContainer } from 'react-navigation';

// import BreederTabNavigator from './BreederTabs';
import PublicStackNavigator from './PublicStack';

import { AuthChecker } from 'features';

const RootNavigator = createSwitchNavigator({
  AuthChecker: AuthChecker,
  Public: PublicStackNavigator,
  // Breeder: BreederTabNavigator
}, {
    initialRouteName: 'Public'
});

export default createAppContainer(RootNavigator);