import {
  createStackNavigator
} from 'react-navigation';

import Profile from '../../features/Profile';
import FarmDetails from '../../features/FarmDetails';

const navigator = createStackNavigator({
  Profile: Profile,
  FarmDetails: FarmDetails,
}, {
    initialRouteName: 'Profile',
    navigationOptions: ({ navigation }) => {
      return {
        header: null
      }
    }
  });

export default navigator;