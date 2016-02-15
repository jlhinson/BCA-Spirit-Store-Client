// Action types
export const ADD_CART_ITEM = 'ADD_CART_ITEM';


// Action creators
export function addCartItem(name, size, qty, price) {
  return {
    type: ADD_CART_ITEM,
    name,
    size,
    qty,
    price
  };
}
