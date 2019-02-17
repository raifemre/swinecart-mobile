import {
  createStackNavigator
} from 'react-navigation';

import Cart from '../../features/Cart';
import RequestItem from '../../features/RequestItem';

const navigator = createStackNavigator({
  Cart: Cart,
  RequestItem: RequestItem,
}, {
    initialRouteName: 'Cart',
    navigationOptions: ({ navigation }) => {
      return {
        header: null
      }
    }
  });

export default navigator;