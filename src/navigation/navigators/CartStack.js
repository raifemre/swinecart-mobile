import {
  createStackNavigator
} from 'react-navigation';

import Cart from '../../features/Cart';
import RequestItem from '../../features/RequestItem';
import RateBreeder from '../../features/RateBreeder';

const navigator = createStackNavigator({
  Cart: Cart,
  RequestItem: RequestItem,
  RateBreeder: RateBreeder,
}, {
    initialRouteName: 'Cart',
    navigationOptions: ({ navigation }) => {
      return {
        header: null
      }
    }
  });

export default navigator;