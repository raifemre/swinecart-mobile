import React, { Component } from 'react';
import {
  StyleSheet
} from 'react-native';

import {
  Container, Content, Body, Title, Segment, Button, Text
} from 'native-base';

import {
  observer, inject
} from 'mobx-react';


import ProductStats from '../components/ProductStats';
import Reviews from '../components/Reviews';

import HeaderWrapper from '../../../shared/HeaderWrapper';
import Segments from '../../../shared/Segments';

@inject('DashboardStore')
@observer
class Dashboard extends Component {

  state = {
    selectedIndex: 0
  }

  componentDidMount() {
    const { DashboardStore } = this.props;
    DashboardStore.getStats();
  }

  setIndex = index => {
    this.setState({
      selectedIndex: index
    });
  }
  render() {

    const { selectedIndex } = this.state;

    const { container, openSansBold } = styles;

    return (
      <Container>
        <HeaderWrapper hasSegment>
          <Body style={[container]}>
            <Title style={[openSansBold, { color: '#ffffff' }]}>
              Dashboard
            </Title>
          </Body>
        </HeaderWrapper>
        <Segments
          values={['Product Status', 'Reviews']}
          selectedIndex={selectedIndex}
          onTabPress={this.setIndex}
        />
        <Content padder>
          { selectedIndex === 0 && <ProductStats stats={this.props.DashboardStore.stats}/> }
          { selectedIndex === 1 && <Reviews /> }
        </Content>
      </Container>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  openSansBold: {
    fontFamily: 'OpenSans-Bold'
  }
});

export default Dashboard;