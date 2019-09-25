import { action, computed, thunk } from 'easy-peasy';
import to from 'await-to-js';
import { OrderService, NavigationService } from 'services';
import { orderMapper } from 'utils/mappers/responseMappers';

export default {
  // State
  isLoading: false,

  // Computed Values

  // Actions
  setLoading: action((state, payload) => {
    state.isLoading = payload.isLoading;
  }),

  // Side Effects
  reserveProduct: thunk(async (actions, payload, { getStoreActions }) => {

    const { orderRequest: {
      customerId, dateNeeded, quantity, specialRequest, swineCartId,
      productId
    } } = payload;
    
    const requestData = {
      status: 'reserved',
      customer_id: customerId,
      product_id: productId,
      swinecart_id: swineCartId,
      request_quantity: quantity,
      date_needed: dateNeeded,
      special_request: specialRequest
    }

    actions.setLoading({ isLoading: true });
    
    const [ error, data ] = await to(OrderService.reserveProduct(requestData));
    
    actions.setLoading({ isLoading: false });
    
    if (error) {
    
    }
    else {
      const { product } = data.data;
      getStoreActions().orders.updateStatus({ product });
      NavigationService.back();
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
      delivery_date: deliveryDate,
    };

    actions.setLoading({ isLoading: true });

    const [error, data] = await to(OrderService.sendForDelivery(requestData));
    
    actions.setLoading({ isLoading: false });
    if (error) {
    }
    else {
      const { product } = data.data;
      getStoreActions().orders.updateStatus({ product });
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

    actions.setLoading({ isLoading: true });

    const [error, data] = await to(OrderService.confirmSold(requestData));

    actions.setLoading({ isLoading: false });
    if (error) {
    }
    else {
      const { product } = data.data;
      getStoreActions().orders.updateStatus({ product });
    }

  }),

  cancelTransaction: thunk(async (state, payload, { getStoreActions }) => {
    console.log(payload);
  }),

};