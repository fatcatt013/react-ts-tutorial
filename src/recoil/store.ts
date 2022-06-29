import { atom, selector, selectorFamily } from 'recoil';

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
