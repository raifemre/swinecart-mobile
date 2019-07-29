import {
  createStackNavigator
} from 'react-navigation';

import {
  Cart
} from '../../screens';

const navigator = createStackNavigator({
  Cart: Cart
}, {
    initialRouteName: 'Cart',
    navigationOptions: ({ navigation }) => {
      return {
        header: null
      }
    }
  });

export default navigator;