import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Body, Card, CardItem, Right, View, Left } from 'native-base';
import { observer, inject } from 'mobx-react';

import TextWrapper from '../../../shared/TextWrapper';
import ButtonWrapper from '../../../shared/ButtonWrapper';

import { Navigation } from '../../../services';

import DetailsModal from './DetailsModal';
import { toJS } from 'mobx';

@inject('InventoryStore', 'MessageStore')
@observer
class Request extends Component {

  state = {
    isModalVisible: false
  }

  onPressMessage = () => {
    const { MessageStore, request } = this.props;
    const { customer_name, user_id } = request;
    MessageStore.setSelectedUser({
      name: customer_name,
      id: user_id
    });
    Navigation.navigate('Chat');
  }

  onPressReserve = async () => {
    const { InventoryStore, request } = this.props;
    await InventoryStore.reserveProduct(request);
  }

  showModal = () => {
    this.setState({
      isModalVisible: true
    });
  }

  hideModal = () => {
    this.setState({
      isModalVisible: false
    });
  }

  render() {

    const { cardStyle } = styles;

    const { request } = this.props;

    const { 
      customer_name, customer_province, request_quantity, special_request, date_needed
    } = request;


    console.dir(toJS(request));

    return (
      <React.Fragment>
        <DetailsModal
          isModalVisible={this.state.isModalVisible}
          hideModal={this.hideModal}
          requestQuantity={request_quantity}
          specialRequest={special_request}
          dateNeeded={date_needed}
        />
        <Card style={[cardStyle]}>
          <CardItem button onPress={this.showModal}>
            <Body style={{ flex: 3, justifyContent: 'center' }}>
              <TextWrapper
                font={'OpenSans-Bold'}
                color={'#000000'}
                text={customer_name}
                size={14}
              />
              <TextWrapper
                font={'OpenSans-Bold'}
                color={'#7f8c8d'}
                text={customer_province}
                size={12}
              />
            </Body>
            <Right style={{ flex: 2 }}>
              <View>
                <ButtonWrapper
                  onPress={this.onPressReserve}
                  text='Reserve'
                  textColor='#ffffff'
                  textSize={14}
                  style={{ height: 24, marginBottom: 4, }}
                />
                <ButtonWrapper
                  onPress={this.onPressMessage}
                  text='Message'
                  textColor='#ffffff'
                  textSize={14}
                  style={{ height: 24, marginTop: 4, }}
                />
              </View>
            </Right>
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
});

export default Request;