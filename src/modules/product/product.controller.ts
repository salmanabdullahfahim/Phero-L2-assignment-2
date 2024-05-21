import { Request, Response } from 'express';
import { productServices } from './product.service';
import productValidationSchema from './product.validation';

const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;

    //zod parsed data
    const parsedData = productValidationSchema.parse(productData);

    const result = await productServices.createProductIntoDb(parsedData);
    res.status(200).json({
      success: true,
      message: 'Product created successfully!',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'something went wrong',
      error: error,
    });
  }
};

// get all products
const getProducts = async (req: Request, res: Response) => {
  try {
    // for get products by search term
    const { searchTerm } = req.query;
    const result = await productServices.getProductsFromDb(
      searchTerm as string | undefined,
    );

    // validation for get products if there is no products found
    if (result.length === 0) {
      return res.status(404).json({ message: 'No products found' });
    }

    res.status(200).json({
      success: true,
      message: searchTerm
        ? `Products matching search term '${searchTerm}' fetched successfully!`
        : 'Products fetched successfully!',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Something went wrong',
      error: error,
    });
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
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'something went wrong',
      error: error,
    });
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
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'something went wrong',
      error: error,
    });
  }
};

//delete product
const deleteProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.productId;
    const result = await productServices.deleteProductFromDb(id);

    // validation for delete product if there is no product found
    if (!result) {
      return res.status(404).json({ message: 'Product not found' });
    }

    //response after deleting product
    res.status(200).json({
      success: true,
      message: 'Product deleted successfully!',
      data: null,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'something went wrong',
      error: error,
    });
  }
};

export const productControllers = {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
