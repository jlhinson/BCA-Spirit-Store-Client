import React, { Component } from 'react';
const FooterLogoUrl = require('./assets/logo-wide.png');

export class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer">
          <div className="logo">
            <a href="https://www.bcatrojans.com/"><img className="pure-img" src={FooterLogoUrl}></img></a>
          </div>
        </div>
      </footer>
    );
  }
}
