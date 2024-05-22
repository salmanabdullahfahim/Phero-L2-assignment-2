import { TProduct } from './product.interface';
import { Product } from './product.model';

// create product
const createProductIntoDb = async (payload: TProduct) => {
  const result = await Product.create(payload);
  return result;
};

// get all products from db
const getProductsFromDb = async (searchTerm?: string) => {
  // get searched products from db
  if (searchTerm) {
    return await Product.find({
      name: { $regex: searchTerm, $options: 'i' },
    });
  }

  // get all products
  return await Product.find();
};

//get product by id from db
const getProductByIdFromDb = async (productId: string) => {
  const result = await Product.findById(productId);
  return result;
};

// update product
const updateProductIntoDb = async (productId: string, payload) => {
  const result = await Product.findByIdAndUpdate(productId, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

// delete product from db
const deleteProductFromDb = async (productId: string) => {
  const result = await Product.findByIdAndDelete(productId);
  return result;
};

export const productServices = {
  createProductIntoDb,
  getProductsFromDb,
  getProductByIdFromDb,
  updateProductIntoDb,
  deleteProductFromDb,
};
