import { ADD_CART_ITEM, REMOVE_CART_ITEM, UPDATE_CART_TOTAL, ADD_ALERT, REMOVE_ALERT, SET_MODAL } from './actions.js';
import Immutable from 'immutable';

const initialState = Immutable.fromJS({
  alerts: [],
  alertTime: 4000,
  modalSelect: 0,
  items: [
    {
      id: 1,
      name: 'BCA',
      image: 'img/bca-blue-on-grey.png',
      price: 10,
      sizes: ['YM', 'YL', 'S', 'M', 'L', 'XL', 'XXL']
    },
    {
      id: 2,
      name: 'BCA Athletics',
      image: 'img/athletics-white-on-blue.png',
      price: 15,
      sizes: ['S', 'M', 'L', 'XL']
    },
    {
      id: 3,
      name: 'BCA Water Bottle',
      image: 'img/bca-water-bottle.png',
      price: 6
    },
    {
      id: 4,
      name: 'BCA Tote',
      image: 'img/athletics-cinch.png',
      price: 12
    }
  ],
  cartItems: [],
  cartTotal: 0
});

function appState(state = initialState, action) {
  switch (action.type) {
  case ADD_CART_ITEM:
    return state.update('cartItems', list => list.push({
      id: Math.floor((Math.random() * 10000) +1),
      name: action.name,
      size: action.size,
      qty: action.qty,
      price: action.price
    }));
  case REMOVE_CART_ITEM:
    let index = state.get('cartItems').findIndex(function(obj) {return obj.id === action.id;});
    return state.deleteIn(['cartItems', index]);
  case UPDATE_CART_TOTAL:
    return state.update('cartTotal', value => value + action.amount);
  case ADD_ALERT:
    return state.update('alerts', list => list.push({
      id: Math.floor((Math.random() * 10000) +1),
      text: action.text
    }));
  case REMOVE_ALERT:
    return state.deleteIn(['alerts', 0]);
  case SET_MODAL:
    return state.set('modalSelect', action.index);
  default:
    return state;
  }
}

export default appState;
