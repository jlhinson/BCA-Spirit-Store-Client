import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeCartItem, updateCartTotal, showAlert, setModal } from './store/actions.js';

export class CartItem extends Component {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove() {
    let amount = this.props.item.qty * this.props.item.price * -1;
    this.props.onClick(this.props.item.id, amount);
  }

  render() {

    const { name, size, qty } = this.props.item;
    const price = '$' + this.props.item.price;

    return (
      <tr className="cart-item" onClick={this.props.onClick ? this.handleRemove : ''}>
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
    this.handleCheckout = this.handleCheckout.bind(this);
  }

  handleCheckout() {
    if (this.props.cartList.length === 0) {
      this.props.alert('No items in cart');
      return;
    }
    this.props.callModal(1);

  }

  render() {

    const { cartList, onCartItemClick } = this.props;
    const total = '$' + this.props.cartTotal;

    return (
      <div>
        <i className="fa fa-arrow-right fa-2x" onClick={this.props.onHandleSlide} />

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
                return <CartItem key={item.id} item={item} onClick={onCartItemClick}/>;
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
          <button className="button-blue pure-button" onClick={this.handleCheckout}>Checkout</button>
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

const mapDispatchToProps = (dispatch) => {
  return {
    onCartItemClick: (id, amount) => {
      dispatch(removeCartItem(id));
      dispatch(updateCartTotal(amount));
    },
    alert: (text) => {
      dispatch(showAlert(text));
    },
    callModal: (index) => {
      dispatch(setModal(index));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
