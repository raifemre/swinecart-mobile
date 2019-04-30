import {
  createStackNavigator
} from 'react-navigation';

import Cart from '../../screens/Cart';
import RequestItem from '../../screens/RequestItem';
import RateBreeder from '../../screens/RateBreeder';

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