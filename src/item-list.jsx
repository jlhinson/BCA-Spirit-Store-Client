import React, { Component } from 'react';

class Item extends Component {
  render() {
    return (
      <div className="pure-u-1">
        <p>List of Items</p>
      </div>
    );
  }
}

export class ItemList extends Component {
  render() {
    return (
      <div className="pure-g item-list">
        <Item />
      </div>
    );
  }
}
