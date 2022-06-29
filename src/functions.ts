import { SetterOrUpdater } from 'recoil';
import { shoppingCartContent as shoppingCartType } from './recoil/store';

export const manipulateQuantity = (
  cart: shoppingCartType,
  id: number,
  operation: number,
  setCart: SetterOrUpdater<never[]>,
): void => {
  //operation -1 | 1
  //if operation is -1, the quantity decrements
  //if operation is 1, the quantity increments

  let cartCopy = Array.from(cart);

  let product: { id: number; quantity: number } | undefined = cartCopy.find(
    (product) => product.id === id,
  );

  if (product) {
    let index = cart.indexOf(product);
    cartCopy[index] = { id: id, quantity: product.quantity + operation };
    if (cartCopy[index].quantity === 0) {
      cartCopy.splice(index, 1);
    }
  } else {
    cartCopy.push({ id: id, quantity: 1 });
  }

  setCart(cartCopy);
};

export const removeFromCart = (
  cart: shoppingCartType,
  setCart: SetterOrUpdater<never[]>,
  id: number,
) => {
  let cartCopy = Array.from(cart);

  let product: { id: number; quantity: number } | undefined = cart.find(
    (product) => product.id === id,
  );

  if (!product) {
    throw new Error('removeFromCart: id was not found in cart');
  }
  cartCopy.splice(cartCopy.indexOf(product), 1);
  setCart(cartCopy);
};
