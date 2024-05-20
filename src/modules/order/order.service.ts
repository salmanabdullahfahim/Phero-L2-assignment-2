import { TOrder } from './order.interface';
import { Order } from './order.model';

// create order in db
const createOrderIntoDb = async (payload: TOrder) => {
  const result = await Order.create(payload);
  return result;
};

const getOrdersFromDb = async () => {
  const result = await Order.find();
  return result;
};

export const orderServices = {
  createOrderIntoDb,
  getOrdersFromDb,
};
