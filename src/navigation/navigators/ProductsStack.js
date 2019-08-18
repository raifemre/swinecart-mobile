import {
  createStackNavigator
} from 'react-navigation';

import {
  Products, AddProduct, ProductDetails
} from '../../screens';

const navigator = createStackNavigator({
  Products: Products,
  AddProduct: AddProduct,
  ProductDetails: ProductDetails,
}, {
    initialRouteName: 'ProductDetails',
  defaultNavigationOptions: ({ navigation }) => {
    return {
      header: null
    }
  }
});

navigator.navigationOptions = ({ navigation }) => {
  return {
    // tabBarVisible: navigation.state.index > 0 ? false : true,
    tabBarVisible: false,
  };
};

export default navigator;