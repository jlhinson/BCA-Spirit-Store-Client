import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showAlert, setModal } from './store/actions.js';
import { CartItem } from './cart.jsx';

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {nameValid: false, emailValid: false, phoneValid: false};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
  }

  handleClose(e) {
    e.preventDefault();
    this.props.closeModal();
  }

  handleNameChange(e) {
    this.setState({nameValid: false});
    const nameTest = /^(([a-zA-z ]){1,100})$/;
    if (nameTest.test(e.target.value)) {
      this.setState({nameValid: true});
    }
  }

  handleEmailChange(e) {
    this.setState({emailValid: false});
    const emailTest = /^(([^ @"]){1,100})\@(([^ @"]){1,100})\.[a-zA-Z]{1,100}$/;
    if (emailTest.test(e.target.value)) {
      this.setState({emailValid: true});
    }
  }

  handlePhoneChange(e) {
    this.setState({phoneValid: false});
    const phoneTest = /^(([0-9-() .]){7,20})$/;
    if (phoneTest.test(e.target.value)) {
      this.setState({phoneValid: true});
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    let name = e.target.name.value;
    let email = e.target.email.value;
    let phone = e.target.phone.value;

    if (!name || !this.state.nameValid) {
      this.props.alert('Name not valid');
      return;
    }

    if (!email || !this.state.emailValid) {
      this.props.alert('Email not valid');
      return;
    }

    if (phone && !this.state.phoneValid) {
      this.props.alert('Phone not valid');
      return;
    }

    let emailData = {
      name: name,
      email: email,
      phone: phone,
      cartList: this.props.cartList
    };

    // call API to send email with data, re-validate data server side
    // report error if any
    // close modal, notify, and clear cart on success

    console.log(emailData);
  }

  render () {
    const { cartList } = this.props;
    const total = '$' + this.props.cartTotal;

    return(
      <div className="overlay">
        <div className="modal">
          <table className="pure-table pure-table-horizontal" align="center">
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
                  return <CartItem key={item.id} item={item}/>;
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

          <div className="notice">
            <h4>Important</h4>
            <ul>
              <li>We do not offer shipping. Items must be picked up from BCA.</li>
              <li>We do not offer online payment (yet). Payment must be received by Mrs. Jessica Hinson to pickup items.</li>
              <li>You will receive a confirmation email that will include a copy of your order and pickup/payment instructions.</li>
            </ul>
          </div>

          <form className="pure-form checkout-form" onSubmit={this.handleSubmit} noValidate>
            <fieldset className="pure-group">
              <input id="name" type="text" placeholder="Name (required)" onChange={this.handleNameChange}/>
              <input id="email" type="email" placeholder="Email (required)" onChange={this.handleEmailChange}/>
              <input id="phone" type="tel" placeholder="Phone (optional)" onChange={this.handlePhoneChange}/>
            </fieldset>
            <button type="cancel" className="button-error pure-button" onClick={this.handleClose}>Cancel</button>
            <button type="submit" className="button-blue pure-button">Submit Order</button>
          </form>

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
    alert: (text) => {
      dispatch(showAlert(text));
    },
    closeModal: () => {
      dispatch(setModal(0));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkout);
