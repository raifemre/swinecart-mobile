import { memoize, mapKeys, snakeCase } from 'lodash';

function changePassword(data) {
  // const transformerName = 'ChangePassword';
  // console.dir(transformerName, data);
  // console.time(transformerName);

  const transformedData = mapKeys(data, (value, key) => {
    return snakeCase(key);
  });

  // console.timeEnd(transformerName);
  // console.dir(transformedData);
  return transformedData;
}

const transformers = {
  changePassword: memoize(changePassword)
}

export default function (type) {
  return transformers[type];
}