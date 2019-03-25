import { Alert } from 'react-native';
import moment from 'moment';
import { Toast } from 'native-base';
import { has, get, set } from 'mobx';

import { toLower } from 'lodash';

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

export function filterNewItems(mobxMap, items, Model) {
  return items.reduce((array, element) => {
    const id = `${element.id}`;
    if(!has(mobxMap, id, element)) {
      const newModel = new Model(element);
      set(mobxMap, id, newModel);
      array.push(newModel);
    }
    return array;
  }, []);
}

export function ternary(prop, truthValue, t, f) {
  return prop === truthValue ? t : f;
}

export function getValues(fields, object) {
  return fields.reduce((accu, field) => {
    accu[field] = object[field];
    return accu;
  }, {});
}

export function toAddProdRequest(newProduct) {

  const { 
    breed, breedType, fatherBreed, motherBreed, name, birthDate,
    type, farmFrom
  } = newProduct;

  return {
    name,
    breed: breedType === 'pure' ? toLower(breed) : toLower(`${fatherBreed}+${motherBreed}`),
    type: type.data,
    farm_from_id: farmFrom.id,
    birthdate: birthDate
  }
}