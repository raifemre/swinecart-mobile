import React, { Component } from 'react';

import { StyleSheet } from 'react-native';

import { Card, CardItem, Badge, View, Thumbnail, Left } from 'native-base';

import { observer, inject } from 'mobx-react';

import TextWrapper from '../../../shared/TextWrapper';
import IconWrapper from '../../../shared/IconWrapper';

import StatusBadge from './StatusBadge';

@inject('ProductsStore')
@observer
class Product extends Component {

  render() {

    const { cardStyle, padding4 } = styles;
    const { product } = this.props;

    const { 
      id, name, breed, type, img_path, age, status
    } = product;

    return (
      <View style={{ paddingHorizontal: 4 }}>
        <Card style={cardStyle} >
          <CardItem style={padding4}>
            <Left>
              <Thumbnail square large source={{ uri: img_path }} />
            </Left>
            <View style={{ flex: 4, marginLeft: 16 }}>
              <View style={{ flexDirection: 'row', }}>
                <TextWrapper
                  text={name} font='OpenSans-Bold' color={'#000000'} size={16}
                />
                <StatusBadge status={status} />
              </View>
              <TextWrapper
                text={`${type} - ${breed}`} font='OpenSans-SemiBold' color={'#7f8c8d'} size={12}
              />
              <TextWrapper
                text={`${age} days old`} font='OpenSans-SemiBold' color={'#7f8c8d'} size={12}
              />
            </View>
            <View>
              <IconWrapper name='more-vert' color='#000000' />
            </View>
          </CardItem>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardStyle: {
    borderColor: 'transparent',
    borderColor: '#f7f7f7',
    shadowColor: '#f7f7f7',
    shadowRadius: 0.1,
    elevation: 1
  },
  padding4: {
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 4,
    paddingRight: 4,
  }
});

export default Product;