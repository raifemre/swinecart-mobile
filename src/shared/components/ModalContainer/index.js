import React, { PureComponent, Fragment } from 'react';

import * as modals from './modals';

class ModalContainer extends PureComponent {

  state = {
    CurrentModal: null
  }

  hideModal = () => {
    this.setState({
      CurrentModal: null
    });
  }

  showModal = (id, data) => {
    const Modal = modals[id];

    this.setState({
      CurrentModal: () => <Modal hideModal={this.hideModal} data={data} />
    });
  }

  render() {

    const { CurrentModal } = this.state;

    return (
      <Fragment>
        {CurrentModal && CurrentModal()}
      </Fragment>
    );
  }

}

export default ModalContainer;