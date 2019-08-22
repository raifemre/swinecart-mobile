import { sample, random } from 'lodash';
import faker from 'faker';
import { differenceInDays } from 'date-fns';

import { urls } from '../../constants/randomImage';
import { create } from 'apisauce';

function createArray(count) {
  return Array(count).fill(0);
}

function createFakeName() {
  return `${faker.name.firstName()} ${faker.name.lastName()}`;
}

// export function createRandomOrder() {
//   return {
//     // status: sample(['requested', 'reserved', 'onDelivery', 'sold']),
//     id: faker.random.uuid(),
//     name: `${random(1000, 9999)}`,
//     type: sample(['Semen', 'Sow', 'Gilt', 'Boar']),
//     breed: sample(['Landrace', 'Large White', 'Duroc', 'Boar']),
//     imageUrl: sample(urls),
//     requests: random(1, 30),
//     statusTime: faker.date.past(),

//     customerName: createFakeName(),
//     dateNeeded: faker.date.future(),
//     requestQuantity: random(1, 99),
//     specialRequest: faker.lorem.paragraphs()
//   };
// }

export function createRandomOrders(count, status) {
  return createArray(count).map(() => {
    return {
      status: status === 'onDelivery' ? 'on_delivery' : status,
      request_count: random(90, 100),

      product: {
        id: faker.random.uuid(),
        name: `${random(1000, 9999)}`,
        type: sample(['semen', 'sow', 'gilt', 'boar']),
        breed: sample(['Landrace', 'Large White', 'Duroc', 'Boar']),
        image: sample(urls),
      },

      reservation: {
        id: faker.random.uuid(),
        quantity: random(90, 100),
        status_time: faker.date.past(),
        date_needed: faker.date.future(),
        delivery_date: faker.date.future(),
        special_request: faker.lorem.paragraphs(),
        customer_name: createFakeName(),
        customer_id: faker.random.uuid(),
        user_id: faker.random.uuid(),
      }
    };
  });
}

export function createRandomRequests(count) {
  return createArray(count).map(() => {
    return {
      product_id: faker.random.uuid(),
      swinecart_id: faker.random.uuid(),
      request_quantity: random(1, 99),
      date_needed: faker.date.future(),
      special_request: faker.lorem.paragraphs(),
      customer_id: faker.random.uuid(),
      customer_name: createFakeName(),
      customer_province: faker.address.city(),
      user_id: faker.random.uuid()
    };
  });
}

export function createRandomProducts(count) {
  return createArray(count).map(() => {
    return createProduct();
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

export function createMessages(count) {
  return createArray(count).map(() => {

    const user = sample([
      { name: 'PigCARD', _id: 1 },
      { name: 'Cecil Carter', _id: 2 },
    ]);

    return {
      _id: faker.random.uuid(),
      text: faker.lorem.sentence(),
      // createdAt: faker.date.recent(),
      user: {
        _id: user._id,
        name: user.name
      }
    }
  });
}

export function createNotifications(count) {
  return createArray(count).map(() => {

    const productRequested = {
      type: 'ProductRequested',
      message: 'requested for Product 2390'
    };

    const breederRated = {
      type: 'BreederRated',
      message: 'rated you with 4.5 (overall average)'
    };

    const fakeNotif = sample([
      productRequested,
      breederRated
    ]);

    return {
      id: faker.random.uuid(),
      type: fakeNotif.type,
      customerName: 'Cecil Carter',
      message: fakeNotif.message,
      createdAt: faker.date.recent(),
      readAt: sample([faker.date.recent(), null]),
    };
  });
}

export function createProduct() {
  
  const birthDate = faker.date.past();

  return {
    id: faker.random.uuid(),
    primaryPhotoURL: sample(urls),
    status: sample(['hidden', 'displayed', 'requested']),
    quantity: `${random(50, 200)}`,
    productInfo: {
      name: `${random(1000, 9999)}`,
      type: sample(['semen', 'sow', 'gilt', 'boar']),
      breed: sample(['landrace', 'large white', 'duroc']),
      age: differenceInDays(new Date(), birthDate),
      birthDate
    },
    swineInfo: {
      adg: `${random(1, 10, true).toFixed(2)}`,
      fcr: `${random(1, 10, true).toFixed(2)}`,
      bft: `${random(1, 10, true).toFixed(2)}`,
      lsba:  `${random(10, 99)}`,
      birthWeight: `${random(1, 10, true).toFixed(2)}`,
      leftTeats:  `${random(10, 99)}`,
      rightTeats:  `${random(10, 99)}`,
      houseType: sample(['tunnel ventilated', 'open sided']),
    },
    otherInfo: faker.lorem.paragraphs(),
    productImages: urls,
    productVideos: urls
  };
}