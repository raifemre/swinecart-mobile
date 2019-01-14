import moment from 'moment';

export function formatBirthdate(birthdate) {
  return moment(new Date(birthdate)).format('LL');
}