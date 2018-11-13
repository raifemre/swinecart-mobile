import {
  createStackNavigator
} from 'react-navigation';

import ManageProducts from '../../features/ManageProducts';
import AddProduct from '../../features/AddProduct';

const navigator = createStackNavigator({
  Products: ManageProducts,
  AddProduct: AddProduct
}, {
    initialRouteName: 'Products',
    navigationOptions: ({ navigation }) => {
      return {
        header: null,
        mode: 'modal'
      }
    }
  });

export default navigator;