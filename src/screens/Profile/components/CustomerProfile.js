import React from 'react';
import { View } from 'native-base';

import { observer, inject } from 'mobx-react';

import Farms from './Farms';
import ChangePassword from './ChangePassword';
import Segments from '../../../shared/Segments';

function CustomerProfile({ selectedIndex, setIndex }) {

  return (
    <React.Fragment>
      <Segments
        values={['Farms', 'Change Password']}
        selectedIndex={selectedIndex}
        onTabPress={setIndex}
      />
      <View style={{ flex: 1 }}>
        {selectedIndex === 0 && <Farms />}
        {selectedIndex === 1 && <ChangePassword />}
      </View>
    </React.Fragment>
  );

}

export default inject('FarmStore', 'AuthStore')(observer(CustomerProfile));
