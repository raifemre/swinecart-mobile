import React, { useEffect } from 'React';
import { mapping } from '@eva-design/eva';
import { ApplicationProvider } from 'react-native-ui-kitten';
import Orientation from 'react-native-orientation';
import RootNavigator from './navigation/navigators';

import { 
  NavigationService, ModalService
} from './services';

import ModalContainer from './shared/components/ModalContainer';

import { colors } from './constants/theme';

function App() {

  useEffect(() => {
    Orientation.lockToPortrait();
  }, []);

  return (
    <ApplicationProvider mapping={mapping} theme={colors}>
      <RootNavigator ref={NavigationService.setTopLevelNavigator} />
      <ModalContainer ref={ModalService.setModalContainerRef} />
    </ApplicationProvider>
  )
}
export default App;