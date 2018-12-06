import {
  createStackNavigator
} from 'react-navigation';

import ManageProducts from '../../features/ManageProducts';
import AddProduct from '../../features/AddProduct';
import EditProduct from '../../features/EditProduct';

const navigator = createStackNavigator({
  Products: ManageProducts,
  AddProduct: AddProduct,
  EditProduct: EditProduct
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