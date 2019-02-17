import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { observer, inject } from 'mobx-react';
import { View, Grid, Row, Col } from 'native-base';
import CardView from 'react-native-cardview';

import TextWrapper from '../../../shared/TextWrapper';
import ImageWrapper from '../../../shared/ImageWrapper';
import OutlinedButton from '../../../shared/OutlinedButton';

import Navigation from '../../../services/navigation';
import { toJS } from 'mobx';

@inject('ShopStore', 'SwineCartStore')
@observer
class Product extends Component {

  requestItem = () => {
    Navigation.navigate('RequestItem', { item: this.props.item });
  }

  deleteItem = async () => {
    const { item, SwineCartStore } = this.props;
    await SwineCartStore.deleteItem(item.id);
  }

  render() {
    const { container } = styles;
    const { item } = this.props;
    const { breeder, product_breed, product_name, product_type, img_path } = item;
    
    return (
      <CardView cardElevation={2} cardMaxElevation={2} cornerRadius={5} style={{ height: 250 }}>
        <View style={[container]}>
          <ImageWrapper width={200} height={100} uri={img_path} />
        </View>
        <View style={{ flex: 1, paddingHorizontal: 8 }}>
          <TextWrapper text={product_name} size={18} color='#000000' />
          <TextWrapper text={`${product_type} - ${product_breed}`} size={12} color='#8E8E8E' />
          <TextWrapper text={breeder} size={12} color='#8E8E8E' />
        </View>
        <View style={{ flex: 1, justifyContent: 'flex-end', padding: 8, marginTop: 8 }}>
          <OutlinedButton block onPress={this.requestItem} style={{ borderColor: '#373f51', paddingLeft: 0, paddingRight: 0, height: 20 }}>
            <TextWrapper text='Request Item' size={12} color='#373f51' />
          </OutlinedButton>
          <OutlinedButton block onPress={this.deleteItem} style={{ borderColor: '#ff715b', paddingLeft: 0, paddingRight: 0, height: 20, marginTop: 8 }}>
            <TextWrapper text='Remove Item' size={12} color='#ff715b' />
          </OutlinedButton>
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