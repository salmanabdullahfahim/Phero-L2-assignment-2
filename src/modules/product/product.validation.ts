import { z } from 'zod';

// Define Zod schema for ProductVariant
const productVariantValidationSchema = z.object({
  type: z.string().nonempty('Type is required'),
  value: z.string().nonempty('Value is required'),
});

// Define Zod schema for Inventory
const inventoryValidationSchema = z.object({
  quantity: z
    .number()
    .int()
    .nonnegative('Quantity must be a non-negative integer'),
  inStock: z.boolean(),
});

// Define Zod schema for Product
const productValidationSchema = z.object({
  name: z.string().nonempty('Product name is required'),
  description: z.string().nonempty('Product description is required'),
  price: z.number().positive('Price must be a positive number'),
  category: z.string().nonempty('Category is required'),
  tags: z
    .array(z.string().nonempty('Tag cannot be empty'))
    .nonempty('Tags are required'),
  variants: z
    .array(productVariantValidationSchema)
    .nonempty('At least one variant is required'),
  inventory: inventoryValidationSchema,
});

export default productValidationSchema;
