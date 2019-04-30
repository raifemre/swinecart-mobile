import {
  createStackNavigator
} from 'react-navigation';

import ManageProducts from '../../screens/ManageProducts';
import AddProduct from '../../screens/AddProduct';
import EditProduct from '../../screens/EditProduct';
import FilterProducts from '../../screens/FilterProducts';
import ProductDetails from '../../screens/ProductDetails';
import ProductMedia from '../../screens/ProductMedia';

const navigator = createStackNavigator({
  Products: ManageProducts,
  AddProduct: AddProduct,
  EditProduct: EditProduct,
  FilterProducts: FilterProducts,
  ProductDetailsBreeder: ProductDetails,
  ProductMedia: ProductMedia,
}, {
    initialRouteName: 'Products',
    defaultNavigationOptions: ({ navigation }) => {
      return {
        header: null
      }
    }
  });

export default navigator;