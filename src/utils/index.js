import moment from 'moment';
import { has, set } from 'mobx';

import { isString, isObject, keys, camelCase, get } from 'lodash';

export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function filterNewItems(mobxMap, items, id = 'id') {
  return items.reduce((array, element) => {
    const key = `${get(element, id)}`;
    if(!has(mobxMap, key, element)) {
      set(mobxMap, key, element);
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