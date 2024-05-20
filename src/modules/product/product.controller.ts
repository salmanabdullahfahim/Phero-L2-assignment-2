import { Request, Response } from 'express';
import { productServices } from './product.service';

const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;
    const result = await productServices.createProductIntoDb(productData);
    res.status(200).json({
      success: true,
      message: 'Product created successfully!',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

// get all products
const getProducts = async (req: Request, res: Response) => {
  try {
    const result = await productServices.getProductsFromDb();
    res.status(200).json({
      success: true,
      message: 'Products fetched successfully!',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const productControllers = {
  createProduct,
  getProducts,
};
