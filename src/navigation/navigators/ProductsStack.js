import {
  createStackNavigator
} from 'react-navigation';

import Products from '../../screens/Products';

const navigator = createStackNavigator({
  Products: Products,
}, {
    initialRouteName: 'Products',
    defaultNavigationOptions: ({ navigation }) => {
      return {
        header: null
      }
    }
  });

export default navigator;