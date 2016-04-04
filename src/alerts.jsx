import React, { Component } from 'react';
import { connect } from 'react-redux';

class Alert extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.getComputedStyle(this.myDiv).opacity;
    this.myDiv.style.opacity = 1;
    let myDiv = this.myDiv;
    setTimeout(function () {
      myDiv.style.opacity = 0;
    }, 3500);
  }

  render() {
    return(
      <div className="alert" ref={(ref) => this.myDiv = ref}>
        <h4>{this.props.text}</h4>
      </div>
    );
  }
}

class Alerts extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="alerts">
      {
        this.props.alerts.map(function(alert) {
          return <Alert key={alert.id} text={alert.text}/>;
        })
      }
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    alerts: state.toJS().alerts
  };
};

export default connect(
  mapStateToProps
)(Alerts);
