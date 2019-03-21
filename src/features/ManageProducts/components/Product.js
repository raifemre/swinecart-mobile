import React, { Component } from 'react';

import { StyleSheet, Image } from 'react-native';

import { Card, CardItem, Button, View, Thumbnail, Left, Body } from 'native-base';

import { observer, inject } from 'mobx-react';

import TextWrapper from '../../../shared/TextWrapper';
import IconWrapper from '../../../shared/IconWrapper';

import StatusBadge from './StatusBadge';

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

    const { cardStyle, padding4 } = styles;
    const { product, onPressMore } = this.props;

    const { 
      id, name, breed, type, img_path, age, status
    } = product;

    return (
      <Card style={cardStyle}>
        <CardItem style={[padding4]}>
          <Image source={{ uri: img_path }} resizeMode='stretch' style={{ height: 100, width: 150, flex: 1, alignSelf: 'center', borderRadius: 5}} />
        </CardItem>
        <CardItem style={[padding4]}>
          <Body>
            <TextWrapper
              text={name} font='OpenSans-Bold' color={'#000000'} size={16}
            />
            <TextWrapper
              text={`${type} - ${breed}`} font='OpenSans-SemiBold' color={'#7f8c8d'} size={12}
            />
            <TextWrapper
              text={`${age} days old`} font='OpenSans-SemiBold' color={'#7f8c8d'} size={12}
            />
          </Body>
        </CardItem>
      </Card>
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
    elevation: 1,
  },
  padding4: {
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 4,
    paddingRight: 4,
  }
});

export default Product;