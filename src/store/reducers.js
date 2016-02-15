import { ADD_CART_ITEM } from './actions.js';
import Immutable from 'immutable';

const initialState = Immutable.fromJS({
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
    return state.updateIn(['cartItems'], list => list.push({
      id: Math.floor((Math.random() * 10000) +1),
      name: action.name,
      size: action.size,
      qty: action.qty,
      price: action.price
    }));
  default:
    return state;
  }
}

export default appState;
