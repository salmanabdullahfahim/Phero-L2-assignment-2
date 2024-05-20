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

// get a single product by id
const getProductById = async (req: Request, res: Response) => {
  try {
    const id = req.params.productId;
    const result = await productServices.getProductByIdFromDb(id);

    res.status(200).json({
      success: true,
      message: 'Products fetched successfully!',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

// update product
const updateProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.productId;
    const updatedProductData = req.body;
    const result = await productServices.updateProductIntoDb(
      id,
      updatedProductData,
    );

    // validation for updated product if there is no product found
    if (!result) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // response after updating product
    res.status(200).json({
      success: true,
      message: 'Product updated successfully!',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const productControllers = {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
};
