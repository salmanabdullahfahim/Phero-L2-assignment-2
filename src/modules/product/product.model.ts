import { Schema, model } from 'mongoose';
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
    required: [true, 'Product name is required'],
  },
  description: {
    type: String,
    required: [true, 'Product name is required'],
  },
  price: {
    type: Number,
    required: [true, 'Product name is required'],
  },
  category: {
    type: String,
    required: [true, 'Product name is required'],
  },
  tags: {
    type: [String],
    required: [true, 'Product name is required'],
  },
  variants: {
    type: [variantsSchema],
    required: [true, 'Product name is required'],
  },
  inventory: inventorySchema,
});

// define model for product
export const Product = model<TProduct>('Product', productSchema);
