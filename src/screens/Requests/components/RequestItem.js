import React, { memo } from 'react';
import { withStyles } from 'react-native-ui-kitten/theme';

import {
  Text, Button, Avatar
} from 'react-native-ui-kitten';

import {
  Block
} from '../../../shared/components';

import { textStyles, colors, sizes } from '../../../constants/theme';
import { NavigationService, ModalService } from '../../../services';
import { TouchableOpacity } from 'react-native-gesture-handler';

function RequestItem(props) {

  const { themedStyle, data } = props;
  const { customerProvince, customerName, imageUrl } = data;

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
        <Avatar
          shape='round'
          source={{ uri: imageUrl }}
          style={themedStyle.imageStyle}
        />
        <Block paddingHorizontal>
          <Text
            category='h6'
            style={[textStyles.headline, themedStyle.nameStyle]}
          >
            {customerName}
          </Text>
          <Text
            category='s2'
            style={[textStyles.caption1, themedStyle.typeStyle]}
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
  imageStyle: {
    width: 96,
    height: 96,
    borderWidth: 1,
    borderColor: colors.gray2
  },
  nameStyle: {
    color: '#000000',
    fontSize: 16
  },
  typeStyle: {
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