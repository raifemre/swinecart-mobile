import React, { Component } from 'react';

import {
  Container, Content
} from 'native-base';

import {
  observer, inject
} from 'mobx-react';


import ProductStats from '../components/ProductStats';
import Reviews from '../components/Reviews';

import HeaderWrapper from '../../../shared/HeaderWrapper';
import BodyWrapper from '../../../shared/BodyWrapper';
import Segments from '../../../shared/Segments';

@inject('DashboardStore')
@observer
class Dashboard extends Component {

  state = {
    selectedIndex: 0
  }

  componentDidMount() {
    this.props.DashboardStore.getStats();
  }

  setIndex = index => {
    this.setState({
      selectedIndex: index
    });
  }

  render() {

    const { selectedIndex } = this.state;

    return (
      <Container>
        <HeaderWrapper hasSegment>
          <BodyWrapper title='Dashboard' />
        </HeaderWrapper>
        <Segments
          values={['Product Status', 'Reviews']}
          selectedIndex={selectedIndex}
          onTabPress={this.setIndex}
        />
        <Content padder style={{ flex: 1 }}>
          { selectedIndex === 0 && <ProductStats /> }
          {/* { selectedIndex === 1 && <Reviews /> } */}
        </Content>
      </Container>
    );
  }

}

export default Dashboard;