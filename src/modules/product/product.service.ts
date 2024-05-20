import { TProduct } from './product.interface';
import { Product } from './product.model';

// create product
const createProductIntoDb = async (payload: TProduct) => {
  const result = await Product.create(payload);
  return result;
};

// get all products from db
const getProductsFromDb = async () => {
  const result = await Product.find();
  return result;
};

//get product by id from db
const getProductByIdFromDb = async (productId: string) => {
  const result = await Product.findById(productId);
  return result;
};

export const productServices = {
  createProductIntoDb,
  getProductsFromDb,
  getProductByIdFromDb,
};
