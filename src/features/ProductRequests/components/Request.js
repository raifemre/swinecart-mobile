import React, { Component } from 'react';

import { StyleSheet, Alert } from 'react-native';

import {
  View, Text, Card, CardItem, Button, Grid, Col, Row,
} from 'native-base';

import { observer, inject } from 'mobx-react';

import { Navigation } from '../../../services';

import { alertDialog } from '../../../utils';

@inject('DashboardStore', 'UserStore')
@observer
class Request extends Component {

  reserveProduct = async () => {
    const { request, DashboardStore } = this.props;
    await DashboardStore.reserveProduct(request);
    Navigation.back();
    setTimeout(() => DashboardStore.setActiveTab(1), 300);
  }

  handleReserve = () => {
    const { request, DashboardStore } = this.props;
    const { selectedProduct } = DashboardStore;
    const { customerName } = request;
    const { name } = selectedProduct;
    const dialogText = `Are you sure you want to reserve ${name} to ${customerName}?`;

    alertDialog(dialogText,
      { text: 'Yes', onPress: this.reserveProduct },
      { text: 'Close', onPress: () => { console.log('Cancelled!') } }
    );
  }

  messageBreeder = () => {

  }

  render() {

    const { openSansBold, cardStyle, flatButton, container } = styles;

    const { request } = this.props;
    const {
      customerName, customerProvince, requestQuantity, specialRequest
    } = request;

    return (
      <Card style={[cardStyle]}>
        <CardItem>
          <Grid>
            <Row style={{ paddingHorizontal: 10, marginBottom: 5 }}>
              <Col>
                <Text style={[openSansBold, { fontSize: 15 }]}>Customer Name</Text>
              </Col>
              <Col>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                  <Text style={[openSansBold, { fontSize: 16 }]}>{customerName}</Text>
                </View>
              </Col>
            </Row>
            <Row style={{ paddingHorizontal: 10, marginBottom: 5 }}>
              <Col>
                <Text style={[openSansBold, { fontSize: 15 }]}>Customer Province</Text>
              </Col>
              <Col>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                  <Text style={[openSansBold, { fontSize: 16 }]}>{customerProvince}</Text>
                </View>
              </Col>
            </Row>
            <Row style={{ paddingHorizontal: 10, marginBottom: 5 }}>
              <Col>
                <Text style={[openSansBold, { fontSize: 15 }]}>Request Quantity</Text>
              </Col>
              <Col>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                  <Text style={[openSansBold, { fontSize: 16 }]}>{requestQuantity}</Text>
                </View>
              </Col>
            </Row>
            <Row style={{ paddingHorizontal: 10, marginBottom: 5 }}>
              <View style={[container]}>
                <Text style={[openSansBold, { fontSize: 15 }]}>Special Request</Text>
              </View>
            </Row>
            <Row style={{ paddingHorizontal: 10, marginBottom: 5 }}>
              <View style={[container]}>
                <Text style={[openSansBold, { fontSize: 15 }]}>{specialRequest}</Text>
              </View>
            </Row>
            <Row>
              <Col style={{ paddingHorizontal: 5 }}>
                <View style={{ flex: 1 }}>
                  <Button
                    block
                    onPress={this.handleReserve}
                    style={[flatButton, { backgroundColor: '#00af66', marginTop: 10 }]}
                  >
                    <Text uppercase={false} style={[openSansBold, { fontSize: 15 }]}>Reserve</Text>
                  </Button>
                </View>
              </Col>
              <Col style={{ paddingHorizontal: 5 }}>
                <View style={{ flex: 1 }}>
                  <Button
                    block
                    onPress={this.messageBreeder}
                    style={[flatButton, { backgroundColor: '#00af66', marginTop: 10 }]}
                  >
                    <Text uppercase={false} style={[openSansBold, { fontSize: 15 }]}>Message</Text>
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

export default Request;