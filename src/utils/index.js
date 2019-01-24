import { Alert } from 'react-native';
import moment from 'moment';
import { Toast } from 'native-base';

export function formatBirthdate(birthdate) {
  return moment(new Date(birthdate)).format('LL');
}

export function alertDialog(title = '', okHandler, cancelhandler) {
  Alert.alert(title, '', [okHandler, cancelhandler], { cancelable: true });
}

export function showToast(text, type, position) {
  // console.log('Toast: ', text, type, position);
  Toast.show({ text, type, position, buttonText: 'Close', duration: 1000 });
}

export function cleanFields(form) {
  const cleanedForm = Object.assign({}, form);
  for (const field in cleanedForm) {
    if (cleanedForm.hasOwnProperty(field)) {
        const value = cleanedForm[field];
        if(typeof value === 'string') {
          cleanedForm[field] = value.trim();
        }
      }
  }
  // console.log('Cleaned Form', cleanedForm);
  return cleanedForm;
}