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
import moment from 'moment';

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
    const { breeder, product_breed, product_name, product_type, img_path, delivery_date, request_quantity, status, status_transactions } = item;
    
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
          {status !== 'on_delivery' && <TextWrapper text={moment(status_transactions[status]).format('MMM Do YYYY, h:mm a')} size={12} color='#ffffff' /> }
          {status === 'on_delivery' && <TextWrapper text={`Expected to arrive on ${delivery_date}`} size={12} color='#ffffff' />}
        </View>
        <View style={{ flex: 1, justifyContent: 'flex-end', padding: 8, marginTop: 8 }}>
          {
            status === 'sold'
              ? 
              <IconWrapper name='local-offer' color='#ffffff' />
              : 
                <View style={{ flexDirection: 'row' }}>
                  <IconWrapper name='queue' color={status === 'requested' ? '#ffffff' : '#bdbdbd'} />
                  <IconWrapper name='save' color={status === 'reserved' ? '#ffffff' : '#bdbdbd'} />
                  <IconWrapper name='local-shipping' color={status === 'on_delivery' ? '#ffffff' : '#bdbdbd'} />
                </View>
          }
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