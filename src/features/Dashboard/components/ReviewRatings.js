import React from 'react';
import { observer, inject } from 'mobx-react';
import Ratings from './Ratings';
import Reviews from './Reviews';

function ReviewRatings(props) {

  return (
    <React.Fragment>
      <Ratings />
      <Reviews />
    </React.Fragment>
  );

}

export default inject('DashboardStore')(observer(ReviewRatings));