import React, { Component } from 'react';
import { connect } from 'react-redux';

class CartList extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { name, size, qty } = this.props.item;
    const price = '$' + this.props.item.price;

    return (
      <tr className="cart-item">
        <td>{name}</td>
        <td>{size}</td>
        <td>{qty}</td>
        <td>{price}</td>
      </tr>
    );
  }
}

class Cart extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { cartList } = this.props;
    const total = '$' + this.props.cartTotal;

    return (
      <div>
        <i className="fa fa-arrow-left fa-2x" onClick={this.props.onHandleSlide} />

        <div className="remove-note">click item to remove</div>

        <table className="pure-table pure-table-horizontal">
          <thead>
            <tr>
              <th>Item</th>
              <th>Size</th>
              <th>Qty</th>
              <th>Price</th>
            </tr>
          </thead>

          <tbody>
            {
              cartList.map(function(item) {
                return <CartList key={item.id} item={item} />;
              })
            }

            <tr>
              <td></td>
              <td></td>
              <th>Total</th>
              <th>{total}</th>
            </tr>
          </tbody>
        </table>

        <div className="cart-checkout">
          <button className="button-blue pure-button">Checkout</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cartList: state.toJS().cartItems,
    cartTotal: state.toJS().cartTotal
  };
};

export default connect(
  mapStateToProps
)(Cart);
