import React, { useEffect, memo } from 'react';
import { StatusBar } from 'react-native';
import { StoreProvider } from 'easy-peasy';
import { mapping } from '@eva-design/eva';
import { ApplicationProvider } from 'react-native-ui-kitten';
import { useScreens } from 'react-native-screens';

import RootNavigator from './navigation/navigators';
import { NavigationService, ModalService } from './services';
import ModalContainer from 'shared/components/ModalContainer';

import { colors } from 'constants/theme';

import store from './store';

useScreens();

function App() {

  useEffect(() => {

  }, []);


  return (
    <StoreProvider store={store}>
      <ApplicationProvider mapping={mapping} theme={colors}>
        <StatusBar backgroundColor={colors.primary} barStyle='light-content' />
        <RootNavigator ref={NavigationService.setTopLevelNavigator} />
        <ModalContainer ref={ModalService.setModalContainerRef} />
      </ApplicationProvider>
    </StoreProvider>
  )
}
export default memo(App, () => true);