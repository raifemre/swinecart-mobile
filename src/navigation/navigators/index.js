import { createSwitchNavigator, createAppContainer } from 'react-navigation';

// import AuthChecker from '../../screens/AuthChecker';

// import CustomerStackNavigator from './CustomerTabs';
import BreederTabNavigator from './BreederTabs';
import PublicStackNavigator from './PublicStack';

const RootNavigator = createSwitchNavigator({
  // AuthChecker: AuthChecker,
  Public: PublicStackNavigator,
  // Customer: CustomerStackNavigator,
  Breeder: BreederTabNavigator
}, {
    initialRouteName: 'Breeder'
});


export default createAppContainer(RootNavigator);