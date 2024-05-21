import { Schema, model } from 'mongoose';
import { TInventory, TProduct, TProductVariant } from './product.interface';

const variantsSchema = new Schema<TProductVariant>({
  type: {
    type: String,
    required: [true, 'Type is required'],
  },
  value: {
    type: String,
    required: [true, 'Value is required'],
  },
});

const inventorySchema = new Schema<TInventory>({
  quantity: {
    type: Number,
    required: [true, 'Quantity is required'],
  },
  inStock: {
    type: Boolean,
    required: [true, 'In stock is required'],
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
    required: [true, 'Product description is required'],
  },
  price: {
    type: Number,
    required: [true, 'Product price is required'],
  },
  category: {
    type: String,
    required: [true, 'Product category is required'],
  },
  tags: {
    type: [String],
    required: [true, 'Product tags is required'],
  },
  variants: {
    type: [variantsSchema],
    required: [true, 'Variants is required'],
  },
  inventory: {
    type: inventorySchema,
    required: [true, 'Inventory is required'],
  },
});

// define model for product
export const Product = model<TProduct>('Product', productSchema);
