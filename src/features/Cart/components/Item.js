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
import { toJS } from 'mobx';

@inject('ShopStore', 'SwineCartStore')
@observer
class Item extends Component {

  onPressRequest = () => {

  }

  onPressRemove = () => {
    const { item, SwineCartStore } = this.props;
    SwineCartStore.removeItem('not_requested', item);
  }

  render() {
    // const { container } = styles;

    const { item } = this.props;
    const { product } = item;
    const { breeder, breed, name, type, img_path } = product;
    
    return (
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
            </View>
          </Body>
        </CardItemBody>
        <CardItemFooter>
          <View style={{ flex: 1, flexDirection: 'row', }}>
            <ButtonWrapper
              onPress={this.onPressRequest}
              buttonColor='#64b5f6'
              text='Request'
              textColor='#ffffff'
              textSize={12}
              style={{ height: 24, flex: 1, marginRight: 2 }}
            />
            <ButtonWrapper
              onPress={this.onPressRemove}
              text='Remove'
              buttonColor='#ffffff'
              textColor='#000000'
              textSize={12}
              style={{ height: 24, flex: 1, marginLeft: 2, }}
            />
          </View>
        </CardItemFooter>
      </CardWrapper>
    );
  }
}

const styles = StyleSheet.create({
});

export default Item;