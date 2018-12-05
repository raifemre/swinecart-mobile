import React, { Component } from 'react';

import {
  StyleSheet
} from 'react-native';

import {
 Body, Card, CardItem, Text, Grid, Col, View
} from 'native-base';

import {
  observer, inject
} from 'mobx-react';

@inject('DashboardStore')
@observer
class Reviews extends Component {

  render() {

    const {
      container, openSansBold, openSansSemiBold
    } = styles;

    const {
      DashboardStore
    } = this.props

    return (
      <React.Fragment>
        <Card>
          <CardItem header style={[container]}>
            <Text style={[openSansBold, { color: '#000000', fontSize: 20 }]}>Overall Average Rating</Text>
          </CardItem>
          <CardItem header style={[container]}>
            <Text style={[openSansBold, { color: '#000000', fontSize: 30 }]}>{DashboardStore.overall} / 5</Text>
          </CardItem>
          <CardItem header style={[container]}>
            <Text style={[openSansBold, { color: '#000000', fontSize: 20 }]}>Number of Reviews: {DashboardStore.reviewsSize}</Text>
          </CardItem>
          <CardItem>
            <Body style={[container]}>
              <Grid>
                <Col>
                  <Text style={[openSansSemiBold]}>Delivery: {DashboardStore.delivery}</Text>
                </Col>
                <Col>
                  <Text style={[openSansSemiBold]}>Transaction: {DashboardStore.transaction}</Text>
                </Col>
                <Col>
                  <Text style={[openSansSemiBold]}>Product Quality: {DashboardStore.productQuality}</Text>
                </Col>
              </Grid>
            </Body>
          </CardItem>
        </Card>
        <View style={[container, { marginTop: 20 }]}>
          <Text style={[openSansBold, { color: '#000000', fontSize: 20 }]}>Customer Reviews</Text>
        </View>
      </React.Fragment>
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

export default Reviews;