
export const Reservation = {
  id: 'id',
  quantity: 'quantity',
  status_time: 'statusTime',
  date_needed: 'dateNeeded',
  delivery_date: 'deliveryDate',
  special_request: 'specialRequest',
  customer_id: 'customerId',
  customer_name: 'customerName',
  user_id: 'userId',
};

export const Product = {
  id: 'id',
  name: 'name',
  type: 'type',
  breed: 'breed',
  image: 'image'
};

export const Order = {
  status: 'status',
  request_count: 'requestCount',
  product: Product,
  reservation: Reservation,
};

export const Request = {
  product_id: 'productId',
  swinecart_id: 'swineCartId',
  request_quantity: 'quantity',
  date_needed: 'dateNeeded',
  special_request: 'specialRequest',
  customer_id: 'customerId',
  customer_name: 'customerName',
  customer_province: 'customerProvince',
  user_id: 'userId'
}