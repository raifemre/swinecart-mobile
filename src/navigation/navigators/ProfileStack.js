import { createStackNavigator } from 'react-navigation';

import { 
  BreederProfile, Settings
} from 'screens';

import transitionConfig from 'constants/transitionConfig';

const navigator = createStackNavigator({
  BreederProfile: BreederProfile,
  Settings: Settings,
}, {
  initialRouteName: 'BreederProfile',
  headerMode: 'none',
  transitionConfig: transitionConfig,
  defaultNavigationOptions: {
  }
});

navigator.navigationOptions = ({ navigation }) => {
  return {
    tabBarVisible: navigation.state.index > 0 ? false : true,
    // tabBarVisible: false,
  };
};

export default navigator;