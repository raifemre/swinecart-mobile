import { 
  parseInt
} from 'lodash';

import { format } from 'date-fns';

export function capitalize() {

}

export function addS(value, string) {
  return parseInt(value) > 1 ? `${string}s` : string;
}

export function formatStatusTime(date) {
  // return date;
  return format(date, 'MMM D YYYY (ddd), h:mm A');
}

export function formatDateNeeded(date) {
  return format(date, 'MMMM D, YYYY')
}

export function formatDeliveryDate(date) {
  return format(date, 'MMMM D, YYYY (ddd)');
}

export function formatMarkedDate(date) {
  const formattedDate = format(date, 'YYYY-MM-DD');
  return { [formattedDate]: { selected: true } };
}