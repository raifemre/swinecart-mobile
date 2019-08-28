import { createStackNavigator } from 'react-navigation';

import { 
  BreederProfile, Settings
} from '../../screens';

const navigator = createStackNavigator({
  Profile: BreederProfile,
  Settings: Settings,
}, {
    initialRouteName: 'Profile',
    defaultNavigationOptions: ({ navigation }) => {
      return {
        header: null
      }
    }
  });

navigator.navigationOptions = ({ navigation }) => {
  return {
    tabBarVisible: navigation.state.index > 0 ? false : true,
    // tabBarVisible: false,
  };
};

export default navigator;