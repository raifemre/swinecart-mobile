import {
  createStackNavigator
} from 'react-navigation';

import {
  Products, 
  // AddProduct,
  // ProductDetails
} from 'features';

import transitionConfig from 'constants/transitionConfig';

const navigator = createStackNavigator({
  Products: Products,
  // ProductDetails: ProductDetails,
  // AddProduct: AddProduct,
}, {
  initialRouteName: 'Products',
  headerMode: 'none',
  transitionConfig: transitionConfig,
  defaultNavigationOptions: {
  }
});

navigator.navigationOptions = ({ navigation }) => {
  return {
    tabBarVisible: navigation.state.index > 0 ? false : true,
    // tabBarVisible: false,
  };
};

export default navigator;