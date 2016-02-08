import React, { Component } from 'react';
import { Header } from './header.jsx';
import { Footer } from './footer.jsx';
import { ItemList } from './item-list.jsx';

/*
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    this.setState({
      counter: this.state.counter + this.props.increment
    });
  }

  render() {
    return (
      <h1 style={{ color: this.props.color }}>
        Counter ({this.props.increment}): {this.state.counter}
      </h1>
    );
  }
}
*/

export class App extends Component {
  render() {
    return (
      <div id="app">
        <Header />
        <ItemList />
        <Footer />
      </div>
    );
  }
}
