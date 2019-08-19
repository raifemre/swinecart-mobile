import React, { useEffect, memo } from 'react';
import { Provider } from 'react-redux';
import { mapping } from '@eva-design/eva';
import { ApplicationProvider } from 'react-native-ui-kitten';
import Orientation from 'react-native-orientation';
import RootNavigator from './navigation/navigators';
import AsyncStorage from '@react-native-community/async-storage';


import { 
  NavigationService, ModalService
} from './services';

import ModalContainer from './shared/components/ModalContainer';

import { colors } from './constants/theme';

import store from './redux/store';

function App() {

  useEffect(() => {
    Orientation.lockToPortrait();
    AsyncStorage.getItem('token')
      .then(token => {
        if(token) NavigationService.navigate('Breeder');
      });
  }, []);

  return (
    <Provider store={store}>
      <ApplicationProvider mapping={mapping} theme={colors}>
        <RootNavigator ref={NavigationService.setTopLevelNavigator} />
        <ModalContainer ref={ModalService.setModalContainerRef} />
      </ApplicationProvider>
    </Provider>
  )
}
export default memo(App, () => true);