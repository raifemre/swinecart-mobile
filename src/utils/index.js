import moment from 'moment';
import { has, set, toJS } from 'mobx';
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

export function toGCFormat(type, user, message) {
  if (type === 1) {

    const {
      id: userId, 
      name
    } = user;

    const {
      content, created_at, read_at, direction, id: messageId
    } = message;

    const newMessage = {
      _id: messageId,
      text: content,
      readAt: read_at,
      direction,
      createdAt: created_at,
      user: {
        _id: userId,
        name
      }
    }

    return newMessage;
  }

  else if (type === 2) {

    const {
      created_at, direction, from, from_id, id, message: content, read_at,
    } = message;

    const newMessage = {
      _id: id,
      text: content,
      createdAt: created_at,
      readAt: read_at,
      direction,
      user: {
        _id: from_id,
        name: from
      }
    };

    return newMessage;
  }

  else if (type === 3) {
    
    const {
      created_at, content, read_at, direction, id: messageId,
    } = message;

    const { id: userId, name } = user;

    const newMessage = {
      _id: messageId,
      text: content,
      createdAt: created_at,
      readAt: read_at,
      direction,
      user: {
        _id: userId,
        name
      }
    };

    return newMessage;

  }

}

export function toDBFormat(toID, userRole, message) {
  
  const { text, user } = message;
  const { _id } = user;

  const newMessage = {
    message: text,
    direction: userRole === 'Breeder' ? 1 : 0,
    from: `${_id}`,
    to: `${toID}`
  };

  return newMessage;
}