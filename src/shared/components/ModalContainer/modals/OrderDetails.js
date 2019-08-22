import React, { memo, useState } from 'react';
import Modal from 'react-native-modal';
import { Button, Text } from 'react-native-ui-kitten';
import { withStyles } from 'react-native-ui-kitten/theme';

import { NavigationService } from '../../../../services';

import { sizes, textStyles, colors } from '../../../../constants/theme';
import Block from '../../Block';
import ContainerView from '../../ContainerView';

import { formatDateNeeded, formatDeliveryDate } from '../../../../utils/formatters';

function OrderDetails (props) {

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
  const { customerName, dateNeeded, deliveryDate, quantity, specialRequest } = data;
  // Button Event Handlers

  const onPressPrimaryAction = () => {
    hideModal();
    NavigationService.navigate('InboxStack');
  };

  const onPressClose = () => {
    hideModal();
  };

  const primaryActionText = 'Message Customer';

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
        <Block flex={1} center left style={themedStyle.headerStyle}>
          <Text style={textStyles.headline}>Reservation Details</Text>
        </Block>
        <ContainerView 
          backgroundColor='#ffffff'
          contentContainerStyle={themedStyle.containerViewStyle}
          showsVerticalScrollIndicator={true}
        >
          <Block flex='disabled' row>
            <Text style={themedStyle.labelStyle}> {'Customer Name: '}</Text>
            <Text style={themedStyle.dataStyle}>{customerName}</Text>
          </Block>  
          <Block flex='disabled' row>
            <Text style={themedStyle.labelStyle}> {'Date Needed: '}</Text>
            <Text style={themedStyle.dataStyle}>{formatDateNeeded(dateNeeded)}</Text>
          </Block>
          <Block flex='disabled' row>
            <Text style={themedStyle.labelStyle}> {'Delivery Date: '}</Text>
            <Text style={themedStyle.dataStyle}>{formatDeliveryDate(deliveryDate)}</Text>
          </Block>
          <Block flex='disabled' row>
            <Text style={themedStyle.labelStyle}> {'Quantity: '}</Text>
            <Text style={themedStyle.dataStyle}>{quantity}</Text>
          </Block>
          <Block flex='disabled'>
            <Text style={themedStyle.labelStyle}> {'Special Request: '}</Text>
            <Text style={themedStyle.dataStyle}>{specialRequest}</Text>
          </Block>
        </ContainerView>
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
              onPress={onPressPrimaryAction}
              style={themedStyle.buttonStyle}
              textStyle={themedStyle.primaryActionTextStyle}
            >
              {primaryActionText}
            </Button>
          </Block>
        </Block>
      </Block>
    </Modal>
  );

}


export default withStyles(memo(OrderDetails), () => ({
  modalStyle: {
    flex: 1,
    margin: sizes.margin
  },
  containerStyle: {
    backgroundColor: '#ffffff',
    maxHeight: 450,
    borderRadius: 5
  },
  containerViewStyle: {
    paddingHorizontal: sizes.padding
  },
  buttonStyle: {
    borderWidth: 0,
  },
  messageCustomerTextStyle: {
    ...textStyles.button,
    color: '#ffffff',
  },
  closeTextStyle: {
    ...textStyles.button,
    color: colors.gray3
  },
  labelStyle: {
    ...textStyles.caption1,
    fontSize: 14,
    color: colors.gray3
  },
  dataStyle: {
    ...textStyles.caption1,
    fontSize: 14,
  },
  headerStyle: {
    maxHeight: 39,
    padding: sizes.padding / 2,
    width: '100%',
  },
  footerStyle: {
    width: '100%',
    maxHeight: 56,
    padding: sizes.padding / 2,
  }
}));