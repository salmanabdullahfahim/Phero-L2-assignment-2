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

export const productServices = {
  createProductIntoDb,
  getProductsFromDb,
};
