import React, { Component } from 'react';
import { connect } from 'react-redux';
import Checkout from './modal-checkout.jsx';

class Modals extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    let modal;

    if (this.props.modalSelect === 1) {
      modal = <Checkout />;
    }

    return(
      <div className="modals">
        {modal}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    modalSelect: state.toJS().modalSelect
  };
};

export default connect(
  mapStateToProps
)(Modals);
