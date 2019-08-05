import React, { memo, useState } from 'react';
import Modal from 'react-native-modal';
import { Button, Text } from 'react-native-ui-kitten';
import { withStyles } from 'react-native-ui-kitten/theme';

import { sizes, textStyles, colors } from '../../../../constants/theme';
import Block from '../../Block';

function CancelTransaction(props) {
  // State

  const [isVisible, setVisible] = useState(true);

  const hideModal = () => {
    setVisible(false);
  };

  // Modal LifeCycle Handlers

  const onModalHide = () => {
    props.hideModal();
  };

  // Props
  const { themedStyle, data } = props;
  const { customerName, productName } = data;

  // Button Event Handlers

  const onPressPrimaryAction = () => {
    hideModal();
  };

  const onPressClose = () => {
    hideModal();
  };

  const confirmText = `Cancel transaction on Product ${productName} to ${customerName}?`;
  const confirmButtonText = 'Yes, cancel it';

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
          <Text style={themedStyle.confirmTextStyle}>
            {confirmText}
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
              {confirmButtonText}
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
    maxHeight: 150,
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
  confirmTextStyle: {
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