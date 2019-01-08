import React, { Component } from 'react';

import { StyleSheet } from 'react-native';

import {
  View, Text, Card, CardItem, Button, Grid, Col, Row
} from 'native-base';

import { startCase } from 'lodash';
import { observer, inject } from 'mobx-react';

import { Navigation } from '../../../services';

import moment from 'moment';


@inject('DashboardStore', 'UserStore')
@observer
class OnDeliveryCard extends Component {

  cancelTransaction = () => {

  }

  sendForDelivery = () => {
    alert('Confirm Sold?');
  }

  showDetails = () => {
    alert('Details');
  }

  messageCustomer = () => {
    alert('Message');
  }

  render() {

    const { openSansBold, cardStyle, container, flatButton } = styles;

    const { product } = this.props;
    const {
      name, type, breed, status_time, customer_name, delivery_date
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
                  <Text style={[openSansBold, { fontSize: 14 }]}>{name}</Text>
                </View>
              </Col>
            </Row>
            <Row style={{ paddingHorizontal: 10, marginBottom: 5 }}>
              <Col>
                <Text style={[openSansBold, { fontSize: 15 }]}>Type</Text>
              </Col>
              <Col>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                  <Text style={[openSansBold, { fontSize: 14 }]}>{startCase(type)}</Text>
                </View>
              </Col>
            </Row>
            <Row style={{ paddingHorizontal: 10, marginBottom: 5 }}>
              <Col>
                <Text style={[openSansBold, { fontSize: 15 }]}>Breed</Text>
              </Col>
              <Col>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                  <Text style={[openSansBold, { fontSize: 14 }]}>{breed}</Text>
                </View>
              </Col>
            </Row>
            <Row style={{ paddingHorizontal: 10, marginBottom: 5 }}>
              <Col>
                <Text style={[openSansBold, { fontSize: 15 }]}>Status</Text>
              </Col>
              <Col>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                  <Text style={[openSansBold, { fontSize: 14 }]}>
                    On Delivery
                  </Text>
                  <Text style={[openSansBold, { fontSize: 12, color: '#757D75' }]}>
                    &nbsp;({moment(status_time).format("MMM D YYYY (ddd), h:mmA")})
                  </Text>
                </View>
              </Col>
            </Row>
            <Row style={{ marginBottom: 5 }}>
              <Col style={{ paddingHorizontal: 5 }}>
                <View style={{ flex: 1 }}>
                  <Button onPress={this.showDetails} block bordered small style={{ borderColor: '#000000' }}>
                    <Text style={[openSansBold, { color: '#000000', fontSize: 14 }]}>Details</Text>
                  </Button>
                </View>
              </Col>
              <Col style={{ paddingHorizontal: 5 }}>
                <View style={{ flex: 1 }}>
                  <Button onPress={this.messageCustomer} block bordered small style={{ borderColor: '#000000' }}>
                    <Text style={[openSansBold, { color: '#000000', fontSize: 14 }]}>Message</Text>
                  </Button>
                </View>
              </Col>
            </Row>
            <Row style={{ paddingHorizontal: 10, marginBottom: 5 }}>
              <Col>
                <Text style={[openSansBold, { fontSize: 15 }]}>Delivery for</Text>
              </Col>
              <Col>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                  <Text style={[openSansBold, { fontSize: 14 }]}>{customer_name}</Text>
                </View>
              </Col>
            </Row>
            <Row style={{ paddingHorizontal: 10, marginBottom: 5 }}>
              <Col>
                <Text style={[openSansBold, { fontSize: 15 }]}>Expected to arrive on</Text>
              </Col>
              <Col>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                  <Text style={[openSansBold, { fontSize: 14 }]}>{delivery_date}</Text>
                </View>
              </Col>
            </Row>
            <Row>
              <Col style={{ paddingHorizontal: 5 }}>
                <View style={{ flex: 1 }}>
                  <Button
                    block
                    onPress={this.sendForDelivery}
                    style={[flatButton, { backgroundColor: '#00af66', marginTop: 10 }]}
                  >
                    <Text uppercase={false} style={[openSansBold, { fontSize: 14 }]}>Confirm Sold</Text>
                  </Button>
                </View>
              </Col>
              <Col style={{ paddingHorizontal: 5 }}>
                <View style={{ flex: 1 }}>
                  <Button
                    block
                    onPress={this.cancelTransaction}
                    style={[flatButton, { backgroundColor: '#EF5350', marginTop: 10 }]}
                  >
                    <Text uppercase={false} style={[openSansBold, { fontSize: 14 }]}>Cancel</Text>
                  </Button>
                </View>
              </Col>
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

export default OnDeliveryCard;