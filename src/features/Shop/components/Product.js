import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { observer } from 'mobx-react';
import { View } from 'native-base';
import CardView from 'react-native-cardview';

import TextWrapper from '../../../shared/TextWrapper';
import ImageWrapper from '../../../shared/ImageWrapper';
import OutlinedButton from '../../../shared/OutlinedButton';
import IconWrapper from '../../../shared/IconWrapper';
import FlatButton from '../../../shared/FlatButton';

@observer
class Product extends Component {

  navigateToProductDetails = () => {
    const { product } = this.props;
    console.log(product.id);
  }

  addToCart = () => {
    const { product } = this.props;
    console.log(product.name);
  }

  render() {
    const { container } = styles;
    const { product } = this.props;
    const { id, age, breed, name, type, img_path } = product;

    return (
      <CardView cardElevation={2} cardMaxElevation={2} cornerRadius={5} style={{ height: 200, flex: 1 }}>
        <View style={container}>
          <ImageWrapper width={200} height={100} uri={img_path} />
        </View>
        <View style={{ flex: 1, paddingHorizontal: 8 }}>
          <TextWrapper text={name} size={18} color='#000000' /> 
          <TextWrapper text={`${type} - ${breed}`} size={12} color='#8E8E8E' /> 
          <TextWrapper text={`${age} days old`} size={12} color='#8E8E8E' /> 
        </View>
        <View style={{ flex: 1, justifyContent: 'flex-end', padding: 8 }}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
              <OutlinedButton onPress={this.navigateToProductDetails} style={{ borderColor: '#373f51', paddingLeft: 0, paddingRight: 0, height: 20 }}>
                <TextWrapper text='View Item' size={12} color='#373f51' />
              </OutlinedButton>
            </View>
            <FlatButton onPress={this.addToCart} transparent style={{ borderColor: '#373f51', paddingTop: 0, paddingBottom: 0, height: 20 }}>
              <IconWrapper name='add-shopping-cart' color='#ff715b' />
            </FlatButton>
          </View>
        </View>
      </CardView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
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
    borderRadius: 10,
    shadowColor: '#f7f7f7',
    shadowRadius: 0,
    elevation: 1,
  }
});

export default Product;