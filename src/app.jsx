import React, { Component } from 'react';
import Slideout from 'slideout';

import Header from './header.jsx';
import { Footer } from './footer.jsx';
import ItemList from './item-list.jsx';
import Cart from './cart.jsx';

import './styles/index.scss';

export class App extends Component {
  constructor() {
    super();
    this.handleSlide = this.handleSlide.bind(this);
  }

  componentDidMount() {
    this.slideout = new Slideout({
      'panel': document.getElementById('panel'),
      'menu': document.getElementById('cart'),
      'padding': 360,
      'touch': false,
      'side': 'right'
    });
  }

  handleSlide() {
    this.slideout.toggle();
  }

  render() {
    return (
      <div id="app">
        <Header onHandleSlide={this.handleSlide}/>
        <div id="cart">
          <Cart onHandleSlide={this.handleSlide}/>
        </div>
        <div id="panel">
          <ItemList />
          <Footer />
        </div>
      </div>
    );
  }
}
