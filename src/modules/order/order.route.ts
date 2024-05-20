import express from 'express';
import { orderControllers } from './order.controller';

const router = express.Router();

// order routes
router.post('/', orderControllers.createOrder);

export const orderRoutes = router;
