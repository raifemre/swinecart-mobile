import {
  createStackNavigator
} from 'react-navigation';

import ManageProducts from '../../features/ManageProducts';
import AddProduct from '../../features/AddProduct';
import EditProduct from '../../features/EditProduct';
import FilterProducts from '../../features/FilterProducts';
import ProductDetails from '../../features/ProductDetails';
import ProductMedia from '../../features/ProductMedia';

const navigator = createStackNavigator({
  Products: ManageProducts,
  AddProduct: AddProduct,
  EditProduct: EditProduct,
  FilterProducts: FilterProducts,
  ProductDetailsBreeder: ProductDetails,
  ProductMedia: ProductMedia,
}, {
    initialRouteName: 'AddProduct',
    navigationOptions: ({ navigation }) => {
      return {
        header: null
      }
    }
  });

export default navigator;