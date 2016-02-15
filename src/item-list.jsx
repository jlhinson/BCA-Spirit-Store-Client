import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCartItem } from './store/actions.js';


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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    let itemName = e.target.name.value;
    let itemSize = e.target.size ? e.target.size.value : '';
    let itemQty = Number(e.target.qty.value);
    let itemPrice = Number(e.target.priceStrip.value);

    if (itemQty < 1) {
      console.log('throw alert for qty < 1');
      return;
    }

    this.props.dispatch(addCartItem(itemName, itemSize, itemQty, itemPrice));
  }

  render() {

    this.price = '$' + this.props.item.price;

    return (
      <div className="pure-u-1 pure-u-md-1-2 pure-u-lg-1-3 item-unit">
        <div className="item-background">

          <img className="pure-img item-image" src={this.props.item.image} />

            <form className="pure-form pure-form-stacked" onSubmit={this.handleSubmit}>
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

Item = connect()(Item);

class ItemList extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { items } = this.props;

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

const mapStateToProps = (state) => {
  return {
    items: state.toJS().items
  };
};

export default connect(
  mapStateToProps
)(ItemList);
