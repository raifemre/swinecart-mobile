import React, { Fragment, memo, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import { NavigationService } from 'services';
import { Block, Text } from 'shared/components';

function Container() {

  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = async () => {
    // const token = await AsyncStorage.getItem('token');
    // if (token) {
    //   NavigationService.navigate('Breeder');
    // }
    // else {
      NavigationService.navigate('Public');
    // }
  };

  return (
    <Fragment>
      <Block flex={1} center middle backgroundColor='primary'>
        <Text>
          Loading...
        </Text>
      </Block>
    </Fragment>
  )

}

export default memo(Container);