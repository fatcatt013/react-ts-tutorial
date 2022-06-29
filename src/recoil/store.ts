import { atom, selectorFamily } from 'recoil';

export const shoppingCart = atom({
  key: 'shoppingCart',
  default: [
    {
      id: 0,
      quantity: 5,
    },
  ],
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
