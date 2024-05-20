// define type for product variant
export type TProductVariant = {
  type: string;
  value: string;
};

// define type for inventory
export type TInventory = {
  quantity: number;
  inStock: boolean;
};

// define type for product
export type TProduct = {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: TProductVariant[];
  inventory: TInventory;
};
