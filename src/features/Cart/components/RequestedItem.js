import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { observer, inject } from 'mobx-react';
import { View, Grid, Row, Col } from 'native-base';
import CardView from 'react-native-cardview';

import TextWrapper from '../../../shared/TextWrapper';
import ImageWrapper from '../../../shared/ImageWrapper';
import OutlinedButton from '../../../shared/OutlinedButton';
import IconWrapper from '../../../shared/IconWrapper';
import FlatButton from '../../../shared/FlatButton';

import Navigation from '../../../services/navigation';
import { Shop } from '../../../services';
import { toJS } from 'mobx';

@inject('ShopStore', 'SwineCartStore')
@observer
class Product extends Component {

  rateBreeder = () => {

  }

  deleteItem = async () => {
    const { item, SwineCartStore } = this.props;
    await SwineCartStore.deleteItem(item.id);
  }

  render() {
    const { container } = styles;
    const { item } = this.props;
    console.log(toJS(item));
    const { breeder, product_breed, product_name, product_type, img_path, request_status, request_quantity, status } = item;
    
    return (
      <CardView cardElevation={2} cardMaxElevation={2} cornerRadius={5} style={{ height: 250, backgroundColor: '#00695C' }}>
        <View style={[container]}>
          <ImageWrapper width={200} height={100} uri={img_path} />
        </View>
        <View style={{ flex: 1, paddingHorizontal: 8 }}>
          <TextWrapper text={product_name} size={18} color='#ffffff' />
          <TextWrapper text={`${product_type} - ${product_breed}`} size={12} color='#ffffff' />
          <TextWrapper text={breeder} size={12} color='#ffffff' />
          <TextWrapper text={`Quantity - ${request_quantity}`} size={12} color='#ffffff' />
        </View>
        <View style={{ flex: 1, justifyContent: 'flex-end', padding: 8, marginTop: 8 }}>
        </View>
      </CardView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
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