// Action types
export const ADD_CART_ITEM = 'ADD_CART_ITEM';
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';
export const UPDATE_CART_TOTAL = 'UPDATE_CART_TOTAL';
export const ADD_ALERT = 'ADD_ALERT';
export const REMOVE_ALERT = 'REMOVE_ALERT';
export const SET_MODAL = 'SET_MODAL';


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

export function removeCartItem(id) {
  return {
    type: REMOVE_CART_ITEM,
    id
  };
}

export function updateCartTotal(amount) {
  return {
    type: UPDATE_CART_TOTAL,
    amount
  };
}

export function addAlert(text) {
  return {
    type: ADD_ALERT,
    text
  };
}

export function removeAlert() {
  return {
    type: REMOVE_ALERT
  };
}

export function showAlert(text) {
  return function (dispatch) {
    dispatch(addAlert(text));
    setTimeout(() => {
      dispatch(removeAlert());
    }, 4000);
  };
}

export function setModal(index) {
  return {
    type: SET_MODAL,
    index
  };
}
