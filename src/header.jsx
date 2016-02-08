import React, { Component } from 'react';

export class Header extends Component {
  render() {
    return (
      <header>
        <div className="pure-g header">
          <div className="pure-u-5-6 title">
            <p>BCA Spirit Store</p>
          </div>
          <div className="pure-u-1-6 cart-icon">
            <span>qty____icon</span>
          </div>
        </div>
      </header>
    );
  }
}
