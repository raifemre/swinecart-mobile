import React from 'React';
import { mapping } from '@eva-design/eva';
import { ApplicationProvider } from 'react-native-ui-kitten';

import RootNavigator from './navigation/navigators';

import { 
  NavigationService, ModalService
} from './services';

import ModalContainer from './shared/components/modals/ModalContainer';

import { colors } from './constants/theme';

export default () => (
  <ApplicationProvider mapping={mapping} theme={colors}>
    <RootNavigator ref={NavigationService.setTopLevelNavigator} />
    <ModalContainer ref={ModalService.setModalContainerRef} />
  </ApplicationProvider>
);