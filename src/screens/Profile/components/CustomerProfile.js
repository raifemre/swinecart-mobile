import React from 'react';
import { View } from 'native-base';

import { observer, inject } from 'mobx-react';

import Farms from './Farms';
import ChangePassword from './ChangePassword';

function CustomerProfile({ selectedIndex, setIndex }) {

  return (
    <React.Fragment>
      <View style={{ flex: 1 }}>
        {selectedIndex === 0 && <Farms />}
        {selectedIndex === 1 && <ChangePassword />}
      </View>
    </React.Fragment>
  );

}

export default inject('FarmStore', 'AuthStore')(observer(CustomerProfile));
