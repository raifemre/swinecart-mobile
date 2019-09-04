import React, { useEffect, memo } from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { mapping } from '@eva-design/eva';
import { ApplicationProvider } from 'react-native-ui-kitten';
import Orientation from 'react-native-orientation';
import { useScreens } from 'react-native-screens';

import RootNavigator from './navigation/navigators';
import { NavigationService, ModalService } from './services';
import ModalContainer from 'shared/components/ModalContainer';

import { colors } from 'constants/theme';

import store from './redux/store';

useScreens();

function App() {

  useEffect(() => {
    Orientation.lockToPortrait();
  }, []);


  return (
    <Provider store={store}>
      <ApplicationProvider mapping={mapping} theme={colors}>
        <StatusBar backgroundColor={colors.primary} barStyle='light-content' />
        <RootNavigator ref={NavigationService.setTopLevelNavigator} />
        <ModalContainer ref={ModalService.setModalContainerRef} />
      </ApplicationProvider>
    </Provider>
  )
}
export default memo(App, () => true);