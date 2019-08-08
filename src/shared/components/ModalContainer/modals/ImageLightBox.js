import React, { memo, useState } from 'react';
import { Image } from 'react-native';
import Modal from 'react-native-modal';
import { Button } from 'react-native-ui-kitten';
import { withStyles } from 'react-native-ui-kitten/theme';
import { colors } from '../../../../constants/theme';
import Block from '../../Block';
import Icon from '../../Icon';


function OrderDetails(props) {

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
  // Button Event Handlers

  const { url } = data;

  const onPressClose = () => {
    hideModal();
  };

  return (
    <Modal
      hideModalContentWhileAnimating={true}
      coverScreen={true}
      backdropOpacity={0.60}
      useNativeDriver={true}
      isVisible={isVisible}
      propagateSwipe={false}
      onBackdropPress={hideModal}
      onBackButtonPress={hideModal}
      onModalHide={onModalHide}
      style={themedStyle.modalStyle}
    >
      <Block flex={1}>
        <Block row flex={1} center left style={{ maxHeight: 40 }}>
          <Block flex={'disabled'} padding left>
            <Button
              size='medium'
              appearance='ghost'
              onPress={onPressClose}
              icon={() => <Icon name='x' />}
              style={themedStyle.buttonStyle}
            >
          </Button>
          </Block>
        </Block>
        <Block flex={1} middle>
          <Block flex={1} middle style={themedStyle.containerStyle}>
            <Image
              style={themedStyle.image}
              source={{ uri: url }}
              resizeMode='cover'
            />
          </Block>
        </Block>
      </Block>
    </Modal>
  );

}


export default withStyles(memo(OrderDetails), () => ({
  modalStyle: {
    flex: 1,
    margin: 0
  },
  containerStyle: {
    backgroundColor: colors.gray2,
    maxHeight: 270,
  },
  image: {
    // flex: 1,
    width: null,
    height: 270,
  },
  closeButtonText: {
    color: '#ffffff'
  }
}));