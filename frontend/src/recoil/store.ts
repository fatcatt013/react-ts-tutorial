import { atom, RecoilState, selector, selectorFamily } from 'recoil';
import Axios from 'axios';

/*
===========
TYPES
===========
*/
export type shoppingCartContent = Array<{ id: number; quantity: number }>;

type product = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

type productList = product[] | [];

type shoppingCart = RecoilState<{
  key: 'string';
  default: shoppingCartContent;
}>;

type loginInfoAtomType = {
  key: 'loginData';
  default:
    | {
        logged: boolean;
      }
    | {
        logged: boolean;
        id: number;
        username: string;
        email: string;
      };
};

/*
===========
FUNCTIONS
===========
*/

const getProducts = async () => {
  const storeItems = await Axios.get('http://localhost:90/api/products');
  return [storeItems.data];
};

/*
===========
CONSTANTS
===========
*/
export const storeItems: productList = (await getProducts())[0];

/*
===========
ATOMS
===========
*/

export const shoppingCart = atom<shoppingCart>({
  key: 'shoppingCart',
  default: [],
});

export const loginData = atom({
  key: 'loginData',
  default: { logged: false },
});

/*
===========
SELECTORS
===========
*/

export const quantityById = selectorFamily({
  key: 'quantityById',
  get:
    (id: number) =>
    ({ get }) => {
      const cart = get(shoppingCart);
      let product: { id: number; quantity: number } | undefined = cart.find(
        (product) => product.id === id,
      );
      if (!product) {
        return 0;
      }
      const indexOfProduct = cart.indexOf(product);
      return cart[indexOfProduct].quantity;
    },
});

export const quantitySum = selector({
  key: 'quantitySum',
  get: ({ get }) => {
    const cart = get(shoppingCart);
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  },
});

export const totalSum = selector({
  key: 'totalSum',
  get: ({ get }) => {
    const cart = get(shoppingCart);
    let totalPrice: number = 0;

    cart.forEach((item) => {
      let dataEntry = storeItems.find((product) => item.id === product.id);

      if (dataEntry === undefined) {
        throw new Error('totalSum: the product is not listed in data.json');
      }
      totalPrice += item.quantity * dataEntry.price;
    });
    return totalPrice;
  },
});
