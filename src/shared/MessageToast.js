import React from 'react';
import { View } from 'native-base';
import { FlashMessageWrapper, styleWithInSet } from 'react-native-flash-message';
import TextWrapper from './TextWrapper';
import IconWrapper from './IconWrapper';

function MessageToast({ message: props }) {

  const colors = {
    success: "#5cb85c",
    info: "#5bc0de",
    warning: "#f0ad4e",
    danger: '#e74c3c',
  };

  const { message, type } = props;

  return (
    <FlashMessageWrapper>
      {wrapperInset => (
        <View 
          style={{ flex: 1, backgroundColor: colors[type], height: 48, paddingLeft: 16 }}
        >
            <View style={{
            flex: 1, flexDirection: 'row', alignItems: 'center' }}>
            <IconWrapper
              size={30}
              color='#ffffff'
              name='alert-circle'
              type='MaterialCommunityIcons'
              style={{ marginLeft: 0, marginRight: 4 }}
            />
            <TextWrapper
              text={message}
              font='OpenSans-Bold'
              size={14}
              color='#ffffff'
            />
          </View>
        </View>
      )}
    </FlashMessageWrapper>
    
  );
}

export default MessageToast;