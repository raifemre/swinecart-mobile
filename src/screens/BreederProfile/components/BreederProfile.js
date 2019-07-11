import React from 'react';
import { View } from 'native-base';
import { observer, inject } from 'mobx-react';

import OfficeInfo from './OfficeInfo';
import Farms from './Farms';
import ChangePassword from './ChangePassword';

function BreederProfile({ selectedIndex, setIndex }) {

  return (
    <React.Fragment>
      {/* <Segments
        values={['Office Info', 'Farms', 'Change Password']}
        selectedIndex={selectedIndex}
        onTabPress={setIndex}
      /> */}
      <View style={{ flex: 1 }}>
        {selectedIndex === 0 && <OfficeInfo />}
        {selectedIndex === 1 && <Farms />}
        {selectedIndex === 2 && <ChangePassword />}
      </View>
    </React.Fragment>
  );

}

export default inject('FarmStore', 'AuthStore')(observer(BreederProfile));
