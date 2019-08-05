import React, { PureComponent, Fragment } from 'react';

import OrderDetails from './OrderDetails';
import SendProduct from './SendProduct';

class ModalContainer extends PureComponent {

  modals = {
    'orderDetails' : OrderDetails,
    'sendProduct': SendProduct,
  }

  state = {
    Component: null
  }

  hideModal = () => {
    this.setState({
      Component: null
    });
  }

  showModal = (id, props) => {
    const Modal = this.modals[id];

    this.setState({
      Component: () => <Modal hideModal={this.hideModal} {...props} />
    });
  }

  render() {

    const { Component } = this.state;

    return (
      <Fragment>
        { Component && Component() }
      </Fragment>
    );
  }

}

export default ModalContainer;