import { createStackNavigator } from 'react-navigation';

import BreederProfile from '../../screens/BreederProfile';
import Settings from '../../screens/Settings';

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