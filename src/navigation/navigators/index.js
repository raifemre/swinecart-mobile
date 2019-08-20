import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { useScreens } from 'react-native-screens';

// import CustomerStackNavigator from './CustomerTabs';
import BreederTabNavigator from './BreederTabs';
import PublicStackNavigator from './PublicStack';

const RootNavigator = createSwitchNavigator({
  Public: PublicStackNavigator,
  // Customer: CustomerStackNavigator,
  Breeder: BreederTabNavigator
}, {
    initialRouteName: 'Public'
});

useScreens();

export default createAppContainer(RootNavigator);