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
    const { email } = req.query;
    let result;

    // for get orders by specific email
    if (email) {
      result = await orderServices.getOrdersByEmailFromDb(email as string);

      // validation for get orders if there is no orders found
      if (result.length === 0) {
        return res.status(404).json({ message: 'No orders found' });
      }
      res.status(200).json({
        success: true,
        message: 'Orders fetched successfully for user email!',
        data: result,
      });
    } else {
      // for get all orders
      result = await orderServices.getOrdersFromDb();
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
