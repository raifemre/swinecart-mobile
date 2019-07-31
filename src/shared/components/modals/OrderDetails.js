import React, { memo, useState } from 'react';
import { View } from 'react-native';
import Modal from 'react-native-modal';
import { Text } from 'react-native-ui-kitten';

function OrderDetails (props) {

  const [ isVisible, setVisible ] = useState(true);

  const { text } = props;

  const hideModal = () => {
    setVisible(false);
  }

  const showModal = () => {

  }

  const onModalHide = () => {
    props.hideModal();
  }

  return (
    <Modal
      hideModalContentWhileAnimating={true}
      coverScreen={true}
      useNativeDriver={true}
      isVisible={isVisible}
      onBackdropPress={hideModal}
      onBackButtonPress={hideModal}
      onModalHide={onModalHide}
      style={{ margin: 0 }}
    >
      <View style={{ backgroundColor: '#ffffff', flex: 1 }}>
        <Text>{text}</Text>
      </View>
    </Modal>
  );

}


export default memo(OrderDetails);