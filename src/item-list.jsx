import React, { Component } from 'react';
require('./assets/items/bca-blue-on-grey.png');
require('./assets/items/athletics-white-on-blue.png');
require('./assets/items/bca-water-bottle.png');
require('./assets/items/athletics-cinch.png');

class SizeList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <label htmlFor="size">Size</label>
        <div className="center-input">
          <select id="size" className="pure-input-1">
            {
              this.props.sizes.map(function(size) {
                return <option key={size}>{size}</option>;
              })
            }
          </select>
        </div>
    </div>
    );
  }
}

class Item extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    this.price = '$' + this.props.item.price;

    return (
      <div className="pure-u-1 pure-u-md-1-2 pure-u-lg-1-3 item-unit">
        <div className="item-background">

          <img className="pure-img item-image" src={this.props.item.image} />

            <form className="pure-form pure-form-stacked">
              <fieldset>

                <legend>{this.props.item.name}</legend>

                <input id="name" type="hidden" value={this.props.item.name} readOnly />
                <input id="priceStrip" type="hidden" value={this.props.item.price} readOnly />

                <div className="pure-g">

                  <div className="pure-u-1-3">
                    {this.props.item.sizes ? <SizeList sizes={this.props.item.sizes}/> : ''}
                  </div>

                  <div className="pure-u-1-3">
                    <label htmlFor="qty">Qty</label>
                    <div className="center-input">
                      <input id="qty" className="pure-input-1" type="number" defaultValue="1" />
                    </div>
                  </div>

                  <div className="pure-u-1-3">
                    <label htmlFor="price">Price</label>
                    <div className="center-input">
                      <input id="price" className="pure-input-1" value={this.price} readOnly />
                    </div>
                  </div>

                </div>

                <button type="submit" className="submit-button"><i className="fa fa-cart-plus fa-2x" /></button>

              </fieldset>
            </form>

        </div>
      </div>
    );
  }
}


export class ItemList extends Component {
  render() {

    const items = [
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
    ];

    return (
      <div className="pure-g item-list">
        {
          items.map(function(item) {
            return <Item key={item.id} item={item} />;
          })
        }
      </div>
    );
  }
}
