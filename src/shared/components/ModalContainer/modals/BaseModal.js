import React, { memo, useState } from 'react';
import RNModal from 'react-native-BaseModal';
import { withStyles } from 'react-native-ui-kitten/theme';

import { sizes} from '../../../../constants/theme';

function BaseModal(props) {

  const [isVisible, setVisible] = useState(true);

  const { themedStyle, customerName, productName, children } = props;

  const hideModal = () => {
    setVisible(false);
  }

  const onModalHide = () => {
    props.hideModal();
  }

  return (
    <RNModal
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
      {children}
    </RNModal>
  );

}

export default withStyles(memo(BaseModal), () => ({
  modalStyle: {
    flex: 1,
  },
}));