import React from 'react';
import {
  StyleSheet
} from 'react-native';
import {
  Button, Text
} from 'native-base';

function EditButton(props) {

  const { 
    isEditable, toggleisEditable, saveInfo, cancelEdit
  } = props;

  const {
    openSansBold, flatButton
  } = styles;

  return (
    <React.Fragment>
      {!isEditable && <Button
        block
        onPress={toggleisEditable}
        style={[flatButton, { backgroundColor: '#00af66' }]}
      >
        <Text uppercase={false} style={[openSansBold, { fontSize: 16 }]}>Edit Info</Text>
      </Button>}
      {isEditable && <React.Fragment>
        <Button
          block
          onPress={saveInfo}
          style={[flatButton, { backgroundColor: '#00af66' }]}
        >
          <Text uppercase={false} style={[openSansBold, { fontSize: 16 }]}>Save</Text>
        </Button>
        <Button
          block
          onPress={cancelEdit}
          style={[flatButton, { backgroundColor: '#EF5350', marginTop: 10 }]}
        >
          <Text uppercase={false} style={[openSansBold, { fontSize: 16 }]}>Cancel</Text>
        </Button>
      </React.Fragment>
      }
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentStyle: {
    flex: 1,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  openSansBold: {
    fontFamily: 'OpenSans-Bold'
  },
  openSansSemiBold: {
    fontFamily: 'OpenSans-SemiBold'
  },
  flatButton: {
    elevation: 0,
    borderColor: 'transparent',
    borderBottomWidth: 0
  },
});

export default EditButton;