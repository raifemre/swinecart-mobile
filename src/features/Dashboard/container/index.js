import React, { Component } from 'react';
import {
  StyleSheet
} from 'react-native';

import {
  Container, Content, Header, Body, Title, StyleProvider, Segment, Button, Text,
  Grid, Col, View
} from 'native-base';

import {
  observer, inject
} from 'mobx-react';

import {
  toJS
} from 'mobx';

import commonColor from '../../../../native-base-theme/variables/commonColor';
import getTheme from '../../../../native-base-theme/components';

import ProductStats from '../components/ProductStats';
import Reviews from '../components/Reviews';

@inject('DashboardStore')
@observer
class Dashboard extends Component {


  constructor(props) {
    super(props);
    this.state = {
      currSeg: 3
    }
  }

  componentDidMount() {
    const { DashboardStore } = this.props;
    DashboardStore.getStats();
  }

  changeSeg = (segNum) => {
    this.setState({
      currSeg: segNum
    });
  }

  render() {
    const {
      DashboardStore
    } = this.props;

    const {
      container, openSansBold, openSansSemiBold
    } = styles;

    return (
      <StyleProvider style={getTheme(commonColor)}>
        <Container>
          <Header noShadow androidStatusBarColor='#ffffff' hasSegment>
            <Body style={[container]}>
              <Title style={[openSansBold, { color: '#000000' }]}>
                Dashboard
              </Title>
            </Body>
          </Header>
          <Segment>
            <Button first onPress={() => this.changeSeg(1)} active={this.state.currSeg === 1}>
              <Text style={[openSansSemiBold]}>Product Status</Text>
            </Button>
            <Button first onPress={() => this.changeSeg(2)} active={this.state.currSeg === 2}>
              <Text style={[openSansSemiBold]}> Reviews</Text>
            </Button>
          </Segment>
          <Content padder>
            { this.state.currSeg === 1 && <ProductStats stats={DashboardStore.stats}/> }
            { this.state.currSeg === 2 && <Reviews /> }
          </Content>
        </Container>
      </StyleProvider>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentStyle: {
    flex: 1,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  openSansBold: {
    fontFamily: 'OpenSans-Bold'
  },
  openSansSemiBold: {
    fontFamily: 'OpenSans-SemiBold'
  }
});

export default Dashboard;