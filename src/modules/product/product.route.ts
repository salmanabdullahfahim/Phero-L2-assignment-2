import express from 'express';
import { productControllers } from './product.controller';

const router = express.Router();
router.post('/', productControllers.createProduct);
router.get('/', productControllers.getProducts);
router.get('/:productId', productControllers.getProductById);
router.put('/:productId', productControllers.updateProduct);

export const productRoutes = router;
