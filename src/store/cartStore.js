import { atom } from 'nanostores';
import { persistentAtom } from '@nanostores/persistent';

// Usamos persistentAtom para que si el usuario refresca la página, los productos NO se borren
export const cartItems = persistentAtom('cart', [], {
  encode: JSON.stringify,
  decode: JSON.parse,
});

export function addCartItem(item) {
  cartItems.set([...cartItems.get(), item]);
}

export function removeCartItem(index) {
  const currentItems = cartItems.get();
  cartItems.set(currentItems.filter((_, i) => i !== index));
}