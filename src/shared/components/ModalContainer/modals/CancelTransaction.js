import React, { memo, useState } from 'react';
import Modal from 'react-native-modal';
import { Button, Text } from 'react-native-ui-kitten';
import { withStyles } from 'react-native-ui-kitten/theme';

import { NavigationService } from '../../../../services';

import { sizes, textStyles, colors } from '../../../../constants/theme';
import Block from '../../Block';

function CancelTransaction(props) {

  const [isVisible, setVisible] = useState(true);

  const { themedStyle, customerName, productName } = props;

  const hideModal = () => {
    setVisible(false);
  }

  const onModalHide = () => {
    props.hideModal();
  }

  const onPressPrimaryAction = () => {
    hideModal();
  }

  const onPressClose = () => {
    hideModal();
  }

  return (
    <Modal
      hideModalContentWhileAnimating={true}
      coverScreen={true}
      backdropOpacity={0.60}
      useNativeDriver={true}
      isVisible={isVisible}
      propagateSwipe={true}
      onBackdropPress={hideModal}
      onBackButtonPress={hideModal}
      onModalHide={onModalHide}
      style={themedStyle.modalStyle}
    >
      <Block center middle style={themedStyle.containerStyle}>
        <Block flex={1} middle padding style={themedStyle.contentStyle}>
          <Text style={themedStyle.modalTextStyle}>
            Cancel transaction on Product {productName} to {customerName}?
          </Text>
        </Block>
        <Block flex={1} row right style={themedStyle.footerStyle}>
          <Block flex={1} center middle>
            <Button
              size='medium'
              onPress={onPressClose}
              appearance='ghost'
              style={themedStyle.buttonStyle}
              textStyle={themedStyle.closeTextStyle}
            >
              Close
            </Button>
          </Block>
          <Block flex={1} center middle>
            <Button
              size='medium'
              status='danger'
              onPress={onPressPrimaryAction}
              style={themedStyle.buttonStyle}
              textStyle={themedStyle.primaryActionTextStyle}
            >
              Yes, cancel it
            </Button>
          </Block>
        </Block>
      </Block>
    </Modal>
  );

}


export default withStyles(memo(CancelTransaction), () => ({
  modalStyle: {
    flex: 1,
    margin: sizes.margin
  },
  containerStyle: {
    backgroundColor: '#ffffff',
    maxHeight: 150  ,
    borderRadius: 5
  },
  buttonStyle: {
    borderWidth: 0,
    margin: 0,
  },
  primaryActionTextStyle: {
    ...textStyles.button,
    color: '#ffffff',
  },
  closeTextStyle: {
    ...textStyles.button,
    color: colors.gray3
  },
  modalTextStyle: {
    ...textStyles.subtitle,
  },
  blockStyle: {
    width: '100%',
  },
  contentStyle: {
    ...this.blockStyle,
  },
  footerStyle: {
    ...this.blockStyle,
    maxHeight: 56,
    padding: sizes.padding / 2,
  }
}));