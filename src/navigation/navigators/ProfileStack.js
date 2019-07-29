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

export default navigator;