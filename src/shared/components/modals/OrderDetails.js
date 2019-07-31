import React, { memo, useState } from 'react';
import { View } from 'react-native';
import Modal from 'react-native-modal';
import { Text } from 'react-native-ui-kitten';

function OrderDetails (props) {

  const [ isVisible, setVisible ] = useState(true);

  const { text } = props;

  hideModal = () => {
    setVisible(false);
    props.hideModal();
  }

  showModal = () => {

  }

  return (
    <Modal
      hideModalContentWhileAnimating={true}
      coverScreen={true}
      useNativeDriver={true}
      isVisible={isVisible}
      onBackdropPress={hideModal}
      onBackButtonPress={hideModal}
    >
      <View style={{ backgroundColor: '#ffffff', }}>
        <Text>{text}</Text>
      </View>
    </Modal>
  );

}


export default memo(OrderDetails);