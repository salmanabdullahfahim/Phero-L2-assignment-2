import { Schema } from 'mongoose';
import { TInventory, TProduct, TProductVariant } from './product.interface';

const variantsSchema = new Schema<TProductVariant>({
  type: {
    type: String,
  },
  value: {
    type: String,
  },
});

const inventorySchema = new Schema<TInventory>({
  quantity: {
    type: Number,
  },
  inStock: {
    type: Boolean,
  },
});

// define schema for product
const productSchema = new Schema<TProduct>({
  name: {
    type: String,
    required: true,
    message: 'Product name is required',
  },
  description: {
    type: String,
    required: true,
    message: 'Product description is required',
  },
  price: {
    type: Number,
    required: true,
    message: 'Product price is required',
  },
  category: {
    type: String,
    required: true,
    message: 'Product category is required',
  },
  tags: {
    type: [String],
    required: true,
    message: 'Product tags is required',
  },
  variants: variantsSchema,
  inventory: inventorySchema,
});
