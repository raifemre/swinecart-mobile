import React, { Component } from 'react';

import { StyleSheet } from 'react-native';

import {
  View, Text, Card, CardItem, Button, Grid, Col, Row, DatePicker, Form, Item
} from 'native-base';

import { startCase } from 'lodash';
import { observer, inject } from 'mobx-react';
import AwesomeAlert from 'react-native-awesome-alert';

import moment from 'moment';
import { toJS } from 'mobx';

import { formatBirthdate } from '../../../utils';

@inject('DashboardStore', 'UserStore')
@observer
class ReservedCard extends Component {

  state = {
    date: null
  }

  dateModal = null;

  cancelTransaction = async () => {
    const { product, DashboardStore } = this.props;
    await DashboardStore.cancelTransaction(product);
  }

  handleDateChange = date => {
    this.setState({ date });
  }

  handleClick = () => {

    const { product } = this.props;
    const { openSansSemiBold } = styles;
    const { status_time, customer_name } = product;
    const delDate = moment(status_time).add(5, 'days').format('MMMM DD, YYYY');
    const PickDate = (
      <View>
        <View style={{ padding: 10 }}>
          <Text>Product will be delivered to customer on or before:</Text>
        </View>
        <Form>
          <Item>
            <DatePicker
              defaultDate={new Date(delDate)}
              minimumDate={new Date()}
              androidMode={'default'}
              locale={'ph'}
              formatChosenDate={date => formatBirthdate(date)}
              textStyle={[openSansSemiBold, { color: "#000000" }]}
              placeHolderTextStyle={[openSansSemiBold, { color: "#000000" }]}
              onDateChange={this.handleDateChange}
            />
          </Item>
        </Form>
      </View>
    );

    this.handleDateChange(delDate);

    this.dateModal.alert(
      `Are you sure this product is set for delivery to ${customer_name}?`,
      PickDate, [
      { text: 'Yes', onPress: this.sendForDelivery },
      { text: 'Close', onPress: () => console.log('Cancelled!') }
    ]);
  }

  sendForDelivery = async () => {
    const { product, DashboardStore } = this.props;
    await DashboardStore.sendProduct(product, formatBirthdate(this.state.date));
    setTimeout(() => DashboardStore.setActiveTab(2), 300);
  }

  showDetails = () => {
    alert('Details');
  }

  messageCustomer = () =>{
    alert('Message');
  }

  render() {

    const { openSansBold, cardStyle, container, flatButton } = styles;

    const { product } = this.props;

    const {
      name, type, breed, status_time, customer_name
    } = product;

    return (
      <React.Fragment>
        <AwesomeAlert
          ref={ref => (this.dateModal = ref)}
          styles={{
            modalContainer: { backgroundColor: 'rgba(49,49,49, 0.7)' },
            titleText: {
              fontSize: 16,
              fontColor: '#000000',
              fontWeight: '900',
              padding: 10,
              alignSelf: 'center'
            },
            modalView: { 
              marginBottom: 10,
              borderRadius: 0,
              backgroundColor: '#FFFFFF'
            }
          }}
        />
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
                      Reserved
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
                  <Text style={[openSansBold, { fontSize: 15 }]}>Reserved for</Text>
                </Col>
                <Col>
                  <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <Text style={[openSansBold, { fontSize: 14 }]}>{customer_name}</Text>
                  </View>
                </Col>
              </Row>
              <Row>
                <Col style={{ paddingHorizontal: 5 }}>
                  <View style={{ flex: 1 }}>
                    <Button
                      block
                      onPress={this.handleClick}
                      style={[flatButton, { backgroundColor: '#00af66', marginTop: 10 }]}
                    >
                      <Text uppercase={false} style={[openSansBold, { fontSize: 14 }]}>Send for Delivery</Text>
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

export default ReservedCard;