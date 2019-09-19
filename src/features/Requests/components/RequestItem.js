import React, { memo } from 'react';
import { TouchableOpacity } from 'react-native';
import { withStyles } from 'react-native-ui-kitten/theme';

import {
  Text, Button
} from 'react-native-ui-kitten';

import {
  Block, UserAvatar
} from 'shared/components';

import { textStyles, colors, sizes } from 'constants/theme';
import { NavigationService, ModalService } from 'services';

function RequestItem(props) {

  const { themedStyle, data } = props;
  const { customerProvince, customerName } = data;

  const onPressView = () => {
    ModalService.showModal('OrderDetails', { ...data });
  };

  const onPressReserve = () => {
  };

  return (
    <TouchableOpacity
      activeOpacity={0.50}
      onPress={onPressView}
    >
      <Block row padding center style={themedStyle.container}>
        <UserAvatar userName={customerName} size={64} textSize={20} />
        <Block paddingHorizontal>
          <Text
            style={themedStyle.customerName}
          >
            {customerName}
          </Text>
          <Text
            style={themedStyle.province}
          >
            {customerProvince}
          </Text>
          <Button
            size='medium'
            onPress={onPressReserve}
            textStyle={[textStyles.button, themedStyle.reserveTextStyle]}
            style={themedStyle.buttonStyle}
          >
            Reserve Product
          </Button>
        </Block>
      </Block>
    </TouchableOpacity>
  );


}

export default withStyles(memo(RequestItem, () => true), () => ({
  container: {
    height: 120,
    overflow: 'hidden',
    backgroundColor: colors.white1,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray1
  },
  customerName: {
    ...textStyles.subtitle,
    color: '#000000',
    fontSize: 16
  },
  province: {
    ...textStyles.caption1,
    color: colors.gray3,
    fontSize: 14
  },
  statusStyle: {
    marginTop: sizes.margin / 2,
    color: '#000000',
    fontSize: 14,
  },
  requestsStyle: {
    color: colors.gray3,
    fontSize: 14,
  },
  buttonStyle: {
    marginTop: sizes.margin / 4,
    borderWidth: 0,
  },
  reserveTextStyle: {
  },
  messageTextStyle: {
    color: '#000000'
  }
}));