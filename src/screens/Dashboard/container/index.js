import React, { Component } from 'react';

import {
  Container, Content
} from 'native-base';

import {
  observer, inject
} from 'mobx-react';


import ProductStats from '../components/ProductStats';
import ReviewRatings from '../components/ReviewRatings';

import HeaderWrapper from '../../../shared/HeaderWrapper';
import BodyWrapper from '../../../shared/BodyWrapper';
// import Segments from '../../../shared/Segments';

@inject('DashboardStore')
@observer
class Dashboard extends Component {

  state = {
    selectedIndex: 1
  }

  componentDidMount() {
    this.props.DashboardStore.getStats();
    this.props.DashboardStore.getRatings();
    this.props.DashboardStore.getReviews();
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
        <Content padder>
          { selectedIndex === 0 && <ProductStats /> }
          { selectedIndex === 1 && <ReviewRatings /> }
        </Content>
      </Container>
    );
  }

}

export default Dashboard;