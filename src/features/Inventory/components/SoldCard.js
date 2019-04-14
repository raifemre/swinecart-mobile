import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Body, View } from 'native-base';

import TextWrapper from '../../../shared/TextWrapper';
import CardItemHeader from '../../../shared/CardItemHeader';
import CardWrapper from '../../../shared/CardWrapper';
import CardItemBody from '../../../shared/CardItemBody';
import ButtonWrapper from '../../../shared/ButtonWrapper';

import DetailsModal from './DetailsModal';
import CardItemFooter from '../../../shared/CardItemFooter';

import Navigation from '../../../services/navigation';
@inject('InventoryStore', 'MessageStore')
@observer
class OnDeliveryCard extends Component {

  state = {
    isDetModVisible: false
  }

  
  hideDetailsModal = () => {
    this.setState({
      isDetModVisible: false
    });
  }

  onPressMessage = () => {
    const { MessageStore, product: { reservation } } = this.props;
    const { customer_name, user_id } = reservation;
    MessageStore.setSelectedUser({
      name: customer_name,
      id: user_id
    });
    Navigation.navigate('Chat');
  }

  onPressView = () => {
    this.setState({
      isDetModVisible: true
    });
  }

  render() {

    const { product } = this.props;
    const { name, img_path, type, breed, reservation } = product;
    const { customer_name, status_time } = reservation;

    return (
      <React.Fragment>
        <DetailsModal
          isModalVisible={this.state.isDetModVisible}
          hideModal={this.hideDetailsModal}
          reservation={reservation}
        />
        <CardWrapper>
          <CardItemHeader uri={img_path} />
          <CardItemBody>
            <Body>
              <View style={{ marginBottom: 5, }}>
                <TextWrapper
                  text={name}
                  font='OpenSans-Bold'
                  color='#2e3131'
                  size={13}
                />
                <TextWrapper
                  text={`${type} - ${breed}`}
                  font='OpenSans-SemiBold'
                  color='#2e3131'
                  size={11}
                />
              </View>
              <View style={{ marginBottom: 10, }}>
                <TextWrapper
                  text={`Sold to ${customer_name}`}
                  font='OpenSans-Bold'
                  color='#2e3131'
                  size={10}
                />
                <TextWrapper
                  text={`${status_time}`}
                  font='OpenSans-Bold'
                  color='#2e3131'
                  size={10}
                />
              </View>
            </Body>
          </CardItemBody>
          <CardItemFooter>
            <View style={{ flex: 1 }}>
              <ButtonWrapper
                onPress={this.onPressView}
                buttonColor='#ffffff'
                text='View Details'
                textColor='#000000'
                textSize={12}
                style={{ height: 24, flex: 1, borderColor: '#000000', borderWidth: 2, marginBottom: 5 }}
              />
              <ButtonWrapper
                onPress={this.onPressMessage}
                text='Message Customer'
                textColor='#ffffff'
                textSize={12}
                style={{ height: 24, flex: 1 }}
              />
            </View>
          </CardItemFooter>
        </CardWrapper>
      </React.Fragment>
    );
  }
}

export default OnDeliveryCard;