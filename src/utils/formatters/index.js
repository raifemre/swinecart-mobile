import { 
  parseInt, upperFirst, replace, startCase, upperCase
} from 'lodash';

import { format, isSameDay, distanceInWordsToNow } from 'date-fns';

export function capitalizeWords(string) {
  return startCase(string);
}

export function uppercaseWord(string) {
  return upperCase(string);
}

export function addS(value, string) {
  const val = parseInt(value);
  if (val === 0 || val > 1) return `${string}s`;
  else return string;
}

export function formatStatusTime(date) {
  // return date;
  return format(date, 'MMM D YYYY (ddd), h:mm A');
}

export function formatDateNeeded(date) {
  return format(date, 'MMMM D, YYYY (ddd)')
}

export function formatDeliveryDate(date) {
  return format(date, 'MMMM D, YYYY (ddd)');
}

export function formatMarkedDate(date) {
  const formattedDate = format(date, 'YYYY-MM-DD');
  return { [formattedDate]: { selected: true } };
}

export function formatMessageDate(date) {
  const now = new Date();
  if (isSameDay(now, date)) {
    return format(date, 'h:mm a');
  }
  else {
    return format(date, 'MMM D');
  }
}

export function formatCreatedAt(date) {
  return `${upperFirst(distanceInWordsToNow(date))} ago`;
}

export function formatBirthdate(date) {
  return format(date, 'MMMM D, YYYY');
}