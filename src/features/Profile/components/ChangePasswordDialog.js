import React from 'react';
import { View } from 'native-base';
import Dialog, { DialogTitle, DialogContent, DialogButton } from 'react-native-popup-dialog';
import TextWrapper from '../../../shared/TextWrapper';
function ChangePasswordDialog({ visible, submit, closeDialog }) {
  return (
    <Dialog
      width={0.9}
      visible={visible}
      dialogTitle={
        <DialogTitle
          title='Change Password Confirmation'
          textStyle={{ fontSize: 18, fontFamily: 'OpenSans-Bold' }}
          hasTitleBar={false}
        />
      }
      actions={[
        <DialogButton
          text='Yes'
          onPress={submit}
          textStyle={{ color: '#000000', fontFamily: 'OpenSans-SemiBold', fontSize: 16 }}
          key="button-1"
        />,
        <DialogButton
          text='Close'
          onPress={closeDialog}
          textStyle={{ color: '#000000', fontFamily: 'OpenSans-SemiBold', fontSize: 16 }}
          key="button-2"
        />
      ]}
      actionContainerStyle={{
        height: 45,
        flexDirection: 'row',
      }}
    >
      <DialogContent>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <TextWrapper
            text='Do you want to change your password?'
            font='OpenSans-SemiBold'
            size={16}
            color='#000000'
          />
        </View>
      </DialogContent>
    </Dialog>
  );
}


export default ChangePasswordDialog;