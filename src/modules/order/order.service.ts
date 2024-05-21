import { Product } from '../product/product.model';
import { TOrder } from './order.interface';
import { Order } from './order.model';

// create order in db
const createOrderIntoDb = async (payload: TOrder) => {
  const { productId, quantity } = payload;

  // get product by id from db
  const product = await Product.findById(productId);

  // if product not found
  if (!product) {
    throw new Error('Product not found');
  }

  // Check if the ordered quantity exceeds the available quantity
  if (product.inventory.quantity < quantity) {
    throw new Error('Insufficient quantity available in inventory');
  }

  // Update  product inventory
  product.inventory.quantity -= quantity;

  // Update inStock status
  product.inventory.inStock = product.inventory.quantity > 0;

  // Save updated product
  await product.save();

  // create order
  const result = await Order.create(payload);
  return result;
};

// get all orders from db
const getOrdersFromDb = async (email?: string) => {
  // get orders by email from db
  if (email) {
    return await Order.find({ email });
  } else {
    return await Order.find();
  }
};

export const orderServices = {
  createOrderIntoDb,
  getOrdersFromDb,
};
