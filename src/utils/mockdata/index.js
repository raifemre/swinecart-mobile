import { sample, random } from 'lodash';
import faker from 'faker';

import { urls } from '../../constants/randomImage';
import { create } from 'apisauce';

function createArray(count) {
  return Array(count).fill(0);
}

function createFakeName() {
  return `${faker.name.firstName()} ${faker.name.lastName()}`;
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

    customerName: createFakeName(),
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
      requests: random(90, 100),
      statusTime: faker.date.past(),

      customerName: createFakeName(),
      dateNeeded: faker.date.future(),
      requestQuantity: random(1, 99),
      specialRequest: faker.lorem.paragraphs()
    };
  });
}

export function createRandomRequests(count) {
  return createArray(count).map(() => {
    return {
      id: faker.random.uuid(),
      customerName: createFakeName(),
      customerProvince: faker.address.city(),
      dateNeeded: faker.date.future(),
      requestQuantity: random(1, 99),
      specialRequest: faker.lorem.paragraphs()
    };
  });
}

export function createRandomProducts(count) {
  return createArray(count).map(() => {
    return {
      id: faker.random.uuid(),
      name: `${random(1000, 9999)}`,
      type: sample(['Semen', 'Sow', 'Gilt', 'Boar']),
      breed: sample(['Landrace', 'Large White', 'Duroc', 'Boar']),
      status: sample(['hidden', 'displayed', 'requested']),
    };
  }); 
}

export function createFakeOtherDetails() {
  return faker.lorem.paragraphs();
}

export function createConversations(count) {
  return createArray(count).map(() => {
    return {
      user: {
        userId: faker.random.uuid(),
        userName: createFakeName(), 
      },
      message: {
        content: faker.lorem.paragraphs(),
        createdAt: faker.date.recent(),
        readAt: sample([faker.date.recent(), null]),
      }
    };
  });
}