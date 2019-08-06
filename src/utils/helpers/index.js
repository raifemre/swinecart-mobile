import last from 'lodash/last';

export function getHeight(status) {
  switch (status) {
    case 'requested': return 194;
    case 'sold' : return 176;
    case 'reserved': case 'onDelivery' : return 266;
  }
}

export function getInitials(fullName) {
  const [ firstName, ...otherNames ] = fullName.split(' ');
  return firstName[0] + last(otherNames)[0];
}