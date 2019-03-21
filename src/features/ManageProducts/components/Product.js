import React, { Component } from 'react';
import { Card, CardItem, View, Left, Right } from 'native-base';
import { observer, inject } from 'mobx-react';

import IconButton from '../../../shared/IconButton';

import ProductInfo from './ProductInfo';

import { ternary } from '../../../utils';

import styles from '../styles';

@inject('ProductsStore')
@observer
class Product extends Component {

  state = {
    selected : false
  }

  onPress = () => {
    this.setState({
      selected: !this.state.selected
    });
  }

  render() {

    const { cardStyle, cardItemLast } = styles;
    const { product } = this.props;
    const { status } = product;

    return (
      <Card style={cardStyle}>
        <ProductInfo product={product} selected={this.state.selected} />
        <CardItem last style={cardItemLast}>
          <Left>
            <IconButton size={24} onPress={this.onPress}
              name={ternary(this.state.selected, true, 'check-circle', 'checkbox-blank-circle-outline')}
              type='MaterialCommunityIcons'
            />
          </Left>
          <Right style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', }}>
              <IconButton marginLeft={0} marginRight={8} size={24} name='edit' type='MaterialIcons' />
              {status !== 'requested' && 
                <IconButton marginLeft={8} marginRight={8} 
                  size={24} 
                  name={status === 'displayed' ? 'eye-off' : 'eye' } 
                  type='MaterialCommunityIcons' 
                /> 
              }
              <IconButton marginLeft={8} marginRight={0} size={24} name='delete' type='MaterialCommunityIcons' />
            </View>
          </Right>
        </CardItem>
      </Card>
    );
  }
}

export default Product;