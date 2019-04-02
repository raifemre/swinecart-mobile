import { memoize, mapKeys, snakeCase, set, transform, toLower } from 'lodash';

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

function addProduct(data) {

  const {
    adg,
    bft,
    birthDate,
    birthWeight,
    breed,
    breedType,
    farmFrom,
    fatherBreed,
    fcr,
    houseType,
    leftTeats,
    lsba,
    maxPrice,
    minPrice,
    motherBreed,
    name,
    otherDetails,
    rightTeats,
    type,
  } = data;

  const transformedData =  {
    farm_from_id: farmFrom.id,
    name,
    type: type.data,
    breed: breedType === 'pure' ? toLower(breed) : toLower(`${fatherBreed}+${motherBreed}`),
    birthdate: birthDate,
    adg, fcr, bft, lsba,
    house_type: houseType ? houseType.data : null,
    birth_weight: birthWeight,
    min_price: minPrice,
    max_price: maxPrice,
    left_teats: leftTeats,
    right_teats: rightTeats,
    other_details: otherDetails
  };

  return transformedData;

}

function reserveProduct(data) {

  const transformedData = {
    status: 'reserved',
    ...data
  }

  return transformedData;
}

function cancelTransaction(data) {

  const { reservation } = data;

  const transformedData = {
    status: 'cancel_transaction',
    reservation_id: reservation.id
  }

  return transformedData;
}

function confirmSold(data) {

  const { reservation } = data;

  const transformedData = {
    status: 'sold',
    reservation_id: reservation.id
  }

  return transformedData;
}

const transformers = {
  changePassword: memoize(changePassword),
  addProduct: memoize(addProduct),
  reserveProduct: memoize(reserveProduct),
  cancelTransaction: memoize(cancelTransaction),
  confirmSold: memoize(confirmSold),
}

export default function (type) {
  return transformers[type];
}