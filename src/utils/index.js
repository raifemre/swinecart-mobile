import moment from 'moment';
import { has, get, set } from 'mobx';

import { isString, isObject, keys, camelCase } from 'lodash';

export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
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

export function ternary(prop, truthValue, t, f) {
  return prop === truthValue ? t : f;
}

export function formatError(error) {
  if (isString(error)) {
    return { errorMessage: error };
  }
  else if (isObject(error)) {
    const field = keys(error)[0];
    return {
      field: camelCase(field),
      errorMessage: error[field][0]
    };
  }
}

export function fromNow(date) {
  return moment(date).fromNow();
}