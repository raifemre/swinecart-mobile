import React, { memo } from 'react';
import { TouchableOpacity } from 'react-native';
import { withStyles } from 'react-native-ui-kitten/theme';

import {
  Text, Button
} from 'react-native-ui-kitten';

import {
  Block
} from '../../../shared/components';

import { textStyles, colors, sizes } from '../../../constants/theme';
import { NavigationService, ModalService } from '../../../services';
import { getInitials } from '../../../utils/helpers';

function RequestItem(props) {

  const { themedStyle, data } = props;
  const { customerProvince, customerName } = data;

  const onPressView = () => {
    ModalService.showModal('OrderDetails', { ...data });
  };

  const onPressReserve = () => {
    NavigationService.back();
  };

  return (
    <TouchableOpacity
      activeOpacity={0.50}
      onPress={onPressView}
    >
      <Block row padding style={themedStyle.container}>
        <Block center middle flex='disabled' style={themedStyle.avatarStyle}>
          <Text
            style={themedStyle.avatarTextStyle}
          >
            {getInitials(customerName)}
          </Text>
        </Block>
        <Block paddingHorizontal>
          <Text
            category='h6'
            style={[textStyles.headline, themedStyle.nameStyle]}
          >
            {customerName}
          </Text>
          <Text
            category='s2'
            style={[textStyles.caption1, themedStyle.provinceStyle]}
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
    height: 135,
    overflow: 'hidden',
    backgroundColor: colors.white1,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray1
  },
  avatarStyle: {
    width: 64,
    height: 64,
    borderWidth: 1,
    borderColor: colors.gray1,
    borderRadius: 50,
    backgroundColor: '#ffffff',
  },
  avatarTextStyle: {
    ...textStyles.caption1,
    fontSize: 24,
    lineHeight: 28.8,
    alignSelf: 'center',
  },
  nameStyle: {
    color: '#000000',
    fontSize: 16
  },
  provinceStyle: {
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