import React, { Component } from 'react';

import StatCard from './StatCard';
import {
  observer, inject
} from 'mobx-react';

@inject('DashboardStore')
@observer
class ProductStats extends Component {

  render() {

    const { DashboardStore } = this.props;

    return (
      <React.Fragment>
        <StatCard title='Requested' data={DashboardStore.requested } />
        <StatCard title='Reserved' data={DashboardStore.reserved} />
        <StatCard title='On Delivery' data={DashboardStore.on_delivery} />
        <StatCard title='Hidden' data={DashboardStore.hidden} />
        <StatCard title='Displayed' data={DashboardStore.displayed} />
      </React.Fragment>
    );
  }

}

export default ProductStats;