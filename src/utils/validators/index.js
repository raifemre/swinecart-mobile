const maxLength = max => value =>
  value && value.length > max 
    ? `Must be ${max} characters or less` 
    : undefined;

export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Please enter a valid Email Address!'
    : undefined;

export const maxLength8 = maxLength(8);