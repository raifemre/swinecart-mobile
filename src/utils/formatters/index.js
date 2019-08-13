import { 
  parseInt, upperFirst
} from 'lodash';

import { format, isSameDay, distanceInWordsToNow } from 'date-fns';

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