import React, { Component } from 'react';

import { StyleSheet } from 'react-native';

import {
  View, Text, Card, CardItem, Button, Grid, Col, Row
} from 'native-base';

import { startCase } from 'lodash';
import { observer, inject } from 'mobx-react';

import { Navigation } from '../../../services';

// moment(value).format("MMM D YYYY (ddd), h:mmA");

@inject('DashboardStore', 'UserStore')
@observer
class RequestedCard extends Component {

  seeRequests = () => {
    const { product, DashboardStore } = this.props;
    DashboardStore.setSelectedProduct(product);
    Navigation.navigate('ProductRequests');
  }

  render() {

    const { openSansBold, cardStyle, container, flatButton } = styles;

    const { product } = this.props;
    const { 
      name, type, breed
    } = product;

    return (
      <Card style={[cardStyle]}>
        <CardItem>
          <Grid>
            <Row style={{ paddingHorizontal: 10, marginBottom: 5 }}>
              <Col>
                <Text style={[openSansBold, { fontSize: 15 }]}>Name</Text>
              </Col>
              <Col>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                  <Text style={[openSansBold, { fontSize: 16 }]}>{name}</Text>
                </View>
              </Col>
            </Row>
            <Row style={{ paddingHorizontal: 10, marginBottom: 5 }}>
              <Col>
                <Text style={[openSansBold, { fontSize: 15 }]}>Type</Text>
              </Col>
              <Col>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                  <Text style={[openSansBold, { fontSize: 16 }]}>{startCase(type)}</Text>
                </View>
              </Col>
            </Row>
            <Row style={{ paddingHorizontal: 10, marginBottom: 5 }}>
              <Col>
                <Text style={[openSansBold, { fontSize: 15 }]}>Breed</Text>
              </Col>
              <Col>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                  <Text style={[openSansBold, { fontSize: 16 }]}>{breed}</Text>
                </View>
              </Col>
            </Row>
            <Row style={{ paddingHorizontal: 10, marginBottom: 5 }}>
              <Col>
                <Text style={[openSansBold, { fontSize: 15 }]}>Status</Text>
              </Col>
              <Col>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                  <Text style={[openSansBold, { fontSize: 16 }]}>Requested</Text>
                </View>
              </Col>
            </Row>
            <Row>
              <View style={{ flex: 1 }}>
                <Button
                  block
                  onPress={this.seeRequests}
                  style={[flatButton, { backgroundColor: '#00af66', marginTop: 10 }]}
                >
                  <Text uppercase={false} style={[openSansBold, { fontSize: 15 }]}>See Requests</Text>
                </Button>
              </View>
            </Row>
          </Grid>
        </CardItem>
      </Card>
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
  },
  cardStyle: {
    borderColor: 'transparent',
    borderColor: '#f7f7f7',
    shadowColor: '#f7f7f7',
    shadowRadius: 0.1,
    elevation: 1
  },
  flatButton: {
    elevation: 0,
    borderColor: 'transparent',
    borderBottomWidth: 0
  },
});

export default RequestedCard;