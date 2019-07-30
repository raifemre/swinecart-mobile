import React, { memo, useState } from 'react';
import { View } from 'react-native';
import Modal from 'react-native-modal';

import { Text } from 'react-native-ui-kitten';

function OrderDetailsModal(props) {

  const [ isVisible, setVisible ] = useState(true);

  const hideModal = () => {
    setVisible(false);
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
        <Text>I am the modal content!</Text>
      </View>
    </Modal>
  );

}


export default memo(OrderDetailsModal);