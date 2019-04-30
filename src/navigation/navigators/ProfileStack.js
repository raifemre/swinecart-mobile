import {
  createStackNavigator
} from 'react-navigation';

import Profile from '../../screens/Profile';
import FarmDetails from '../../screens/FarmDetails';

const navigator = createStackNavigator({
  Profile: Profile,
  FarmDetails: FarmDetails,
}, {
    initialRouteName: 'Profile',
    defaultNavigationOptions: ({ navigation }) => {
      return {
        header: null
      }
    }
  });

export default navigator;