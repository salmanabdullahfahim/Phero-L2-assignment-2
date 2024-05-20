import express from 'express';
import { orderControllers } from './order.controller';

const router = express.Router();

// order routes
router.post('/', orderControllers.createOrder);
router.get('/', orderControllers.getOrders);

export const orderRoutes = router;
