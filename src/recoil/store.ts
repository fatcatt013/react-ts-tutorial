import { atom, RecoilState, selector, selectorFamily } from 'recoil';
import storeItems from '../data/items.json';

export type shoppingCartContent = Array<{ id: number; quantity: number }>;

type shoppingCart = RecoilState<{
  key: 'string';
  default: shoppingCartContent;
}>;

export const shoppingCart = atom({
  key: 'shoppingCart',
  default: [],
});

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
