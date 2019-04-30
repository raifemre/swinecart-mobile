import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { observer, inject } from 'mobx-react';
import { View, Body } from 'native-base';

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
class Product extends Component {

  onPressView = () => {
    const { product } = this.props;
    Navigation.navigate('ProductDetailsCustomer', { product });
  }

  onPressAdd = async () => {
    const { product, SwineCartStore } = this.props;
    await SwineCartStore.addItem('not_requested', product.id);
  }

  render() {
    // const { container } = styles;
    const { product } = this.props;
    const { breeder, age, breed, name, type, img_path } = product;
    // console.dir(toJS(product));

    return (
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
              <TextWrapper
                text={`${age} days old`}
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
            {/* <ButtonWrapper
              onPress={this.onPressView}
              buttonColor='#ffffff'
              text='View'
              textColor='#000000'
              textSize={12}
              style={{ height: 24, flex: 1, marginRight: 2, borderColor: '#000000', borderWidth: 2, }}
            /> */}
            <ButtonWrapper
              onPress={this.onPressAdd}
              text='Add'
              buttonColor='#00695C'
              textColor='#ffffff'
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

export default Product;