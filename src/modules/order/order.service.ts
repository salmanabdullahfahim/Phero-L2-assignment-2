import { TOrder } from './order.interface';
import { Order } from './order.model';

// create order in db
const createOrderIntoDb = async (payload: TOrder) => {
  const result = await Order.create(payload);
  return result;
};

// get all orders from db
const getOrdersFromDb = async () => {
  const result = await Order.find();
  return result;
};

// get orders by email from db
const getOrdersByEmailFromDb = async (email: string) => {
  const result = await Order.find({ email });
  return result;
};

export const orderServices = {
  createOrderIntoDb,
  getOrdersFromDb,
  getOrdersByEmailFromDb,
};
