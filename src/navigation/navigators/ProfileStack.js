import { createStackNavigator } from 'react-navigation';

import BreederProfile from '../../screens/BreederProfile';
// import FarmDetails from '../../screens/FarmDetails';

const navigator = createStackNavigator({
  Profile: BreederProfile,
  // FarmDetails: FarmDetails,
}, {
    initialRouteName: 'Profile',
    defaultNavigationOptions: ({ navigation }) => {
      return {
        header: null
      }
    }
  });

export default navigator;