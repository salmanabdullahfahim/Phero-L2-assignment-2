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
    if (error instanceof Error) {
      if (error.message === 'Product not found') {
        return res.status(404).json({
          success: false,
          message: 'Product not found',
        });
      }
      if (error.message === 'Insufficient quantity available in inventory') {
        return res.status(400).json({
          success: false,
          message: 'Insufficient quantity available in inventory',
        });
      }

      res.status(500).json({
        success: false,
        message: 'An unexpected error occurred',
      });
    } else {
      res.status(500).json({
        success: false,
        message: 'An unexpected error occurred',
      });
    }
  }
};

// get all orders
const getOrders = async (req: Request, res: Response) => {
  try {
    const { email } = req.query;
    let result;

    // for get orders by specific email
    if (email) {
      result = await orderServices.getOrdersByEmailFromDb(email as string);

      // validation for get orders if there is no orders found
      if (result.length === 0) {
        return res.status(404).json({ message: 'Order not found' });
      }
      res.status(200).json({
        success: true,
        message: 'Orders fetched successfully for user email!',
        data: result,
      });
    } else {
      // for get all orders
      result = await orderServices.getOrdersFromDb();
      // validation for get orders if there is no orders found
      if (result.length === 0) {
        return res.status(404).json({ message: 'Order not found' });
      }
      res.status(200).json({
        success: true,
        message: 'Orders fetched successfully!',
        data: result,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const orderControllers = {
  createOrder,
  getOrders,
};
