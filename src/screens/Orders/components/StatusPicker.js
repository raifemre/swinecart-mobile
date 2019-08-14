import React, { Fragment, memo } from 'react';

import {
  withStyles
} from 'react-native-ui-kitten/theme';

// import { Avatar } from 'react-native-ui-kitten';
import { CustomPicker } from 'react-native-custom-picker';
import { Block } from '../../../shared/components';
import { colors, sizes } from '../../../constants/theme';

const options = [
  {
    label: 'Requested',
    data: 'requested'
  },
  {
    label: 'Reserved',
    data: 'reserved'
  },
];

function StatusPicker({ themedStyle, setStatus }) {

  const onValueChange = value => {
    // console.dir(value.data);
    setStatus(value.data);
  }

  return (
    <Block flex='disabled' row style={themedStyle.container}>
      <CustomPicker
        options={options}
        getLabel={item => item.label}
        onValueChange={onValueChange}
      />
    </Block>
  );
}

export default withStyles(memo(StatusPicker), () => ({
  container: {
    paddingVertical: sizes.padding,
    paddingHorizontal: sizes.padding,
    backgroundColor: colors.white1,
    borderBottomColor: colors.gray2,
    borderBottomWidth: 1,
    width: '100%'
  }
}));