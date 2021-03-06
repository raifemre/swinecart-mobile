import { action, thunk } from 'easy-peasy';
import to from 'await-to-js';

import { OrderService, NavigationService, ToastService } from 'services';

import routes from 'constants/routes';

import { formatDateInput } from 'utils/formatters';


export default {
  // State
  isLoading: false,

  // Computed Values

  // Actions
  setLoading: action((state, payload) => {
    state.isLoading = payload;
  }),

  // Side Effects
  reserveProduct: thunk(async (actions, payload, { getStoreActions }) => {

    const {
      customerId, dateNeeded, quantity, specialRequest, swineCartId,
      productId
    } = payload;
    
    const requestData = {
      status: 'reserved',
      customer_id: customerId,
      product_id: productId,
      swinecart_id: swineCartId,
      request_quantity: quantity,
      date_needed: dateNeeded,
      special_request: specialRequest
    }

    actions.setLoading(true);

    const [ error, data ] = await to(OrderService.reserveProduct(requestData));
    
    if (error) {
      ToastService.show('Please try again later!', null);
      actions.setLoading(false);
    }
    else {
      const { product } = data.data;

      ToastService.show('Product successfully reserved!', () => {
        getStoreActions().orders.updateStatus(product);
        getStoreActions().orders.setCurrentStatus(routes[1]);
        actions.setLoading(false);
        NavigationService.back();
      });
    }
    
  }),

  sendForDelivery: thunk(async (actions, payload, { getStoreActions }) => {
    
    const { 
      deliveryDate, product, reservation
    } = payload;

    const requestData = {
      status: 'on_delivery',
      product_id: product.id,
      reservation_id: reservation.id,
      delivery_date: formatDateInput(deliveryDate),
    };

    actions.setLoading(true);

    const [error, data] = await to(OrderService.sendForDelivery(requestData));

    if (error) {
      ToastService.show('Please try again later!', null);
      actions.setLoading(false);
    }
    else {
      const { product } = data.data;
      ToastService.show('Product is now on delivery!', () => {
        getStoreActions().orders.updateStatus(product);
        getStoreActions().orders.setCurrentStatus(routes[2]);
        actions.setLoading(false);
      });
      
    }
  }),

  confirmSold: thunk(async (actions, payload, { getStoreActions }) => {
    
    const {
      product, reservation
    } = payload;

    const requestData = {
      status: 'sold',
      product_id: product.id,
      reservation_id: reservation.id
    };

    actions.setLoading(true);

    const [error, data] = await to(OrderService.confirmSold(requestData));
    
    if (error) {
      ToastService.show('Please try again later!', null);
      actions.setLoading(false);
    }
    else {
      const { product } = data.data;

      ToastService.show('Product is now sold!', () => {
        getStoreActions().orders.updateStatus(product);
        getStoreActions().orders.setCurrentStatus(routes[3]);
        actions.setLoading(false);
      });

    }

  }),

  cancelTransaction: thunk(async (actions, payload, { getStoreActions }) => {

    const {
      product, reservation, status
    } = payload;

    const requestData = {
      status: 'cancel_transaction',
      product_id: product.id,
      reservation_id: reservation.id
    };

    actions.setLoading(true);

    const [error, data] = await to(OrderService.cancelTransaction(requestData));

    if (error) {
      actions.setLoading(false);
    }
    else {

      ToastService.show('Transaction cancelled!', () => {
        getStoreActions().orders.removeItem({ reservationId: reservation.id, status });
        actions.setLoading(false);
      });

    }


  }),

};