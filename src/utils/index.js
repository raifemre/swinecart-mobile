import { Alert } from 'react-native';
import moment from 'moment';
import { Toast } from 'native-base';
import { has, get, set } from 'mobx';

export function formatBirthdate(birthdate) {
  return moment(new Date(birthdate)).format('LL');
}

export function alertDialog(title = '', okHandler, cancelhandler) {
  Alert.alert(title, '', [okHandler, cancelhandler], { cancelable: true });
}

export function showToast(text, type, position) {
  // console.log('Toast: ', text, type, position);
  Toast.show({ text, type, position, buttonText: 'Close', duration: 1500 });
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

export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function transformChangePass({ currentPassword, newPassword, newPasswordConfirmation }) {
  const request = {
    current_password: currentPassword,
    new_password: newPassword,
    new_password_confirmation: newPasswordConfirmation
  }

  return request;
}

export function filterNewItems(mobxMap, items) {
  return items.reduce((array, element) => {
    const id = `${element.id}`;
    if(!has(mobxMap, id, element)) { 
      set(mobxMap, id, element);
      array.push(element);
    }
    return array;
  }, []);
}