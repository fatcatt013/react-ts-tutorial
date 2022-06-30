import itemData from '../../src/data/items.json';

type productData = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export const getProductById = (id: number): productData => {
  let item = itemData.find((product) => product.id === id);
  if (item === undefined) {
    throw Error("getProductById: can't find item with this id");
  }
  return item;
};
