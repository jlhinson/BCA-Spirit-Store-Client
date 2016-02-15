import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        <div className="pure-g header">
          <div className="pure-u-3-4 pure-u-md-5-6 title">
            <p>BCA Spirit Store</p>
          </div>
          <div className="pure-u-1-4 pure-u-md-1-6 cart" onClick={this.props.onHandleSlide}>
            <div className="pure-g">
              <div className="pure-u-1-3 cart-qty">
                <span>{this.props.cartQty}</span>
              </div>
              <div className="pure-u-2-3">
                <i className="fa fa-shopping-cart fa-3x" />
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cartQty: state.toJS().cartItems.length
  };
};

export default connect(
  mapStateToProps
)(Header);
