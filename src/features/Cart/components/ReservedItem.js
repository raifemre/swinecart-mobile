import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { observer, inject } from 'mobx-react';
import { Body, View } from 'native-base';

import TextWrapper from '../../../shared/TextWrapper';
import CardItemHeader from '../../../shared/CardItemHeader';
import CardWrapper from '../../../shared/CardWrapper';
import CardItemBody from '../../../shared/CardItemBody';
import CardItemFooter from '../../../shared/CardItemFooter';
import ButtonWrapper from '../../../shared/ButtonWrapper';

import Navigation from '../../../services/navigation';

@inject('ShopStore', 'SwineCartStore')
@observer
class ReservedItem extends Component {


  onPressMessage = () => {
    alert('Message Breeder');
  }

  render() {

    const { item } = this.props;
    const { product, status_time } = item;
    const { breeder, breed, name, type, img_path } = product;

    return (
      <React.Fragment>
        <CardWrapper>
          <CardItemHeader uri={img_path} />
          <CardItemBody>
            <Body>
              <View style={{ marginBottom: 5 }}>
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
                <TextWrapper
                  text={`${breeder}`}
                  font='OpenSans-Bold'
                  color='#2e3131'
                  size={11}
                />
                <TextWrapper
                  text={`${status_time}`}
                  font='OpenSans-Bold'
                  color='#2e3131'
                  size={11}
                />
              </View>
            </Body>
          </CardItemBody>
          <CardItemFooter>
            <View style={{ flex: 1, flexDirection: 'row', }}>
              <ButtonWrapper
                onPress={this.onPressMessage}
                text='Message Breeder'
                textColor='#ffffff'
                textSize={12}
                style={{ height: 24, flex: 1, marginRight: 2 }}
              />
            </View>
          </CardItemFooter>
        </CardWrapper>
      </React.Fragment>
    );
  }
}

export default ReservedItem;