import express, { Request, Response } from 'express';
import { productRoutes } from './modules/product/product.route';
import { orderRoutes } from './modules/order/order.route';
const app = express();

//parsers
app.use(express.json());

//routes
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to ecommerce app');
});

// handle route not found
app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
});

export default app;
