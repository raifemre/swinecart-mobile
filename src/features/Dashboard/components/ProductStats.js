import React, { Component } from 'react';

import StatCard from './StatCard';

class ProductStats extends Component {

  render() {
    return (
      <React.Fragment>
        <StatCard title='Requested' data={{ boar: 9999, sow: 9999, gilt: 0, semen: 0 }} />
        <StatCard title='Reserved' data={{ boar: 0, sow: 0, gilt: 0, semen: 0 }} />
        <StatCard title='On Delivery' data={{ boar: 0, sow: 0, gilt: 0, semen: 0 }} />
        <StatCard title='Hidden' data={{ boar: 0, sow: 0, gilt: 0, semen: 0 }} />
        <StatCard title='Displayed' data={{ boar: 0, sow: 0, gilt: 0, semen: 0 }} />
        <StatCard title='Available Products' data={{ boar: 0, sow: 0, gilt: 0, semen: 0 }} />
      </React.Fragment>
    );
  }

}

export default ProductStats;