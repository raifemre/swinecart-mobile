import {
  createStackNavigator
} from 'react-navigation';

import {
  Products, AddProduct
} from '../../screens';

const navigator = createStackNavigator({
  Products: Products,
  AddProduct: AddProduct,
}, {
  initialRouteName: 'AddProduct',
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