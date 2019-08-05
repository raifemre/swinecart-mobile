import React, { memo, useState } from 'react';
import Modal from 'react-native-modal';
import { Button, Text } from 'react-native-ui-kitten';
import { withStyles } from 'react-native-ui-kitten/theme';

import { NavigationService } from '../../../../services';

import { sizes, textStyles, colors } from '../../../../constants/theme';
import Block from '../../Block';
import ContainerView from '../../ContainerView';

import { formatDateNeeded } from '../../../../utils/formatters';

function OrderDetails (props) {

  const [ isVisible, setVisible ] = useState(true);

  const { themedStyle, data } = props;
  const { specialRequest, customerName, requestQuantity, dateNeeded } = data;

  const hideModal = () => {
    setVisible(false);
  }

  const showModal = () => {

  }

  const onModalHide = () => {
    props.hideModal();
  }

  const onPressMessage = () => {
    NavigationService.navigate('InboxStack');
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
        <Block flex={1} center left padding style={themedStyle.headerFooterStyle}>
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
            <Text style={themedStyle.labelStyle}> {'Quantity: '}</Text>
            <Text style={themedStyle.dataStyle}>{requestQuantity}</Text>
          </Block>
          <Block flex='disabled'>
            <Text style={themedStyle.labelStyle}> {'Special Request: '}</Text>
            <Text style={themedStyle.dataStyle}>{specialRequest}</Text>
          </Block>
        </ContainerView>
        <Block flex={1} row center right style={themedStyle.headerFooterStyle}>
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
              onPress={onPressMessage}
              style={themedStyle.buttonStyle}
              textStyle={themedStyle.messageCustomerTextStyle}
            >
              Message
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
  headerFooterStyle: {
    maxHeight: 56, width: '100%'
  }
}));