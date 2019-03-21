import React from 'react';
import { View } from 'native-base';
import TextWrapper from '../../../shared/TextWrapper';
function StatusBadge({ status }) {
  if(status === 'hidden' || status === 'displayed') {
    return (
      <View style={{ 
        backgroundColor: status === 'displayed' ? '#00695C' : '#95A5A6',
        borderColor: status === 'displayed' ? '#00695C' : '#95A5A6',
        borderRadius: 5,
        borderWidth: 1,
        alignSelf: 'flex-start',
        padding: 3,
        marginLeft: 4,
      }}>
        <TextWrapper
          text={status.toUpperCase()} font='OpenSans-Bold' color={'#ffffff'} size={9}
        />
      </View>
    );
  }
  else {
    return null;
  }
}

export default StatusBadge;
