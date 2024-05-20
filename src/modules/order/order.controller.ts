import { Request, Response } from 'express';
import { orderServices } from './order.service';

// create order
const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    const result = await orderServices.createOrderIntoDb(orderData);
    res.status(200).json({
      success: true,
      message: 'Order created successfully!',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

// get all orders
const getOrders = async (req: Request, res: Response) => {
  try {
    const result = await orderServices.getOrdersFromDb();
    res.status(200).json({
      success: true,
      message: 'Orders fetched successfully!',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const orderControllers = {
  createOrder,
  getOrders,
};
