import {
  createStackNavigator
} from 'react-navigation';

import ManageProducts from '../../features/ManageProducts';
import AddProduct from '../../features/AddProduct';
import EditProduct from '../../features/EditProduct';
import FilterProducts from '../../features/FilterProducts';

const navigator = createStackNavigator({
  Products: ManageProducts,
  AddProduct: AddProduct,
  EditProduct: EditProduct,
  FilterProducts: FilterProducts
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