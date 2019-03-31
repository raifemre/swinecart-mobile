import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Ratings from './Ratings';

@inject('DashboardStore')
@observer
class Reviews extends Component {

  render() {

    return (
      <React.Fragment>
        <Ratings />
      </React.Fragment>
    );
  }

}

export default Reviews;