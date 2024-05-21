import { z } from 'zod';

const orderValidationSchema = z.object({
  email: z.string().email('Invalid email'),
  productId: z.string().nonempty('Product ID is required'),
  price: z.number().positive('Price must be a positive number'),
  quantity: z.number().positive('Quantity must be a positive number'),
});

export default orderValidationSchema;
