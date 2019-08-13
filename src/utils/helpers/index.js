import last from 'lodash/last';
import upperCase from 'lodash/upperCase'

export function getHeight(status) {
  switch (status) {
    case 'requested': return 194;
    case 'sold' : return 176;
    case 'reserved': case 'onDelivery' : return 266;
  }
}

export function getInitials(fullName) {
  const [ firstName, ...otherNames ] = fullName.split(' ');
  const initials = firstName[0] + last(otherNames)[0];
  return upperCase(initials);
}