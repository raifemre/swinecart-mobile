import {
  createStackNavigator
} from 'react-navigation';

import Shop from '../../features/Shop';

const navigator = createStackNavigator({
  Shop: Shop,
}, {
    initialRouteName: 'Shop',
    navigationOptions: ({ navigation }) => {
      return {
        header: null
      }
    }
  });

export default navigator;