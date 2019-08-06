import { sample, random } from 'lodash';
import faker from 'faker';

import { urls } from '../../constants/randomImage';

function createArray(count) {
  return Array(count).fill(0);
}

export function createRandomOrder() {
  return {
    id: faker.random.uuid(),
    name: `${random(1000, 9999)}`,
    type: sample(['Semen', 'Sow', 'Gilt', 'Boar']),
    breed: sample(['Landrace', 'Large White', 'Duroc', 'Boar']),
    // status: sample(['requested', 'reserved', 'onDelivery', 'sold']),
    status: 'reserved',
    imageUrl: sample(urls),
    requests: random(1, 30),
    statusTime: faker.date.past(),

    customerName: faker.name.findName(),
    dateNeeded: faker.date.future(),
    requestQuantity: random(1, 99),
    specialRequest: faker.lorem.paragraphs()
  };
}

export function createRandomOrders(count, status) {
  return createArray(count).map(() => {
    return {
      id: faker.random.uuid(),
      name: `${random(1000, 9999)}`,
      type: sample(['Semen', 'Sow', 'Gilt', 'Boar']),
      breed: sample(['Landrace', 'Large White', 'Duroc', 'Boar']),
      // status: sample(['requested', 'reserved', 'onDelivery', 'sold']),
      status: status,
      imageUrl: sample(urls),
      requests: random(1, 30),
      statusTime: faker.date.past(),

      customerName: faker.name.findName(),
      dateNeeded: faker.date.future(),
      requestQuantity: random(1, 99),
      specialRequest: faker.lorem.paragraphs()
    };
  });
}