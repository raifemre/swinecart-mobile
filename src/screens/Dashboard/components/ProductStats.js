import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import LoadingView from '../../../shared/LoadingView';

import StatCard from './StatCard';
@inject('DashboardStore')
@observer
class ProductStats extends Component {

  render() {
    const { DashboardStore } = this.props;
    return (
      <React.Fragment>
        { !DashboardStore.stats && <LoadingView /> }
        {
          DashboardStore.stats &&
          <React.Fragment>
            <StatCard title='Requested' data={DashboardStore.stats.requested} />
            <StatCard title='Reserved' data={DashboardStore.stats.reserved} />
            <StatCard title='On Delivery' data={DashboardStore.stats.on_delivery} />
            <StatCard title='Sold' data={DashboardStore.stats.sold} />
            <StatCard title='Hidden' data={DashboardStore.stats.hidden} />
            <StatCard title='Displayed' data={DashboardStore.stats.displayed} />
          </React.Fragment>
        }
      </React.Fragment>
    );
  }

}

export default ProductStats;