import { Schema, model } from 'mongoose';
import { TOrder } from './order.interface';

//define schema for order
const orderSchema = new Schema<TOrder>({
  email: {
    type: String,
    required: [true, 'Email is required'],
  },
  productId: {
    type: String,
    required: [true, 'Product id is required'],
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
  },
  quantity: {
    type: Number,
    required: [true, 'Quantity is required'],
  },
});

// define model for order
export const Order = model<TOrder>('Order', orderSchema);
