import React, { Component } from 'react';

import { StyleSheet, Image } from 'react-native';

import { Card, CardItem, Button, View, Left, Body, Right } from 'native-base';

import { observer, inject } from 'mobx-react';

import TextWrapper from '../../../shared/TextWrapper';
import IconButton from '../../../shared/IconButton';

import StatusBadge from './StatusBadge';

import { ternary } from '../../../utils';

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

    const { cardStyle, cardItemFirst, cardItemLast, cardItemBody } = styles;
    const { product, onPressMore } = this.props;

    const { 
      id, name, breed, type, img_path, age, status
    } = product;

    return (
      <Card style={cardStyle}>
        <CardItem style={[cardItemFirst, { backgroundColor: ternary(this.state.selected, true, '#00695C', 'transparent') }]}>
          <Image source={{ uri: img_path }} resizeMode='stretch' style={{ height: 100, width: 150, flex: 1, alignSelf: 'center', borderRadius: 5}} />
        </CardItem>
        <CardItem style={[cardItemBody, { backgroundColor: ternary(this.state.selected, true, '#00695C', 'transparent')}]}>
          <Body>
            <View style={{ flexDirection: 'row' }}>
              <TextWrapper
                text={name}
                font='OpenSans-Bold'
                color={ternary(this.state.selected, true, '#ffffff', '#2e3131')}
                size={15}
              />
              <StatusBadge status={status} />
            </View>
            <TextWrapper
              text={`${type} - ${breed}`}
              font='OpenSans-SemiBold'
              color={ternary(this.state.selected, true, '#ffffff', '#95A5A6')} 
              size={11}
            />
            <TextWrapper
              text={`${age} days old`}
              font='OpenSans-SemiBold'
              color={ternary(this.state.selected, true, '#ffffff', '#95A5A6')}
              size={11}
            />
          </Body>
        </CardItem>
        <CardItem last style={cardItemLast}>
          <Left>
            <IconButton size={30} onPress={this.onPress}
              name={ternary(this.state.selected, true, 'check-circle', 'checkbox-blank-circle-outline')}
              type='MaterialCommunityIcons'
            />
          </Left>
          <Right style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row' }}>
              <IconButton marginLeft={0} marginRight={2} size={30} name='pencil-circle' type='MaterialCommunityIcons' />
              <IconButton marginLeft={2} marginRight={2} size={30} name='pencil-circle' type='MaterialCommunityIcons' />
              <IconButton marginLeft={2} marginRight={0} size={30} name='delete-circle' type='MaterialCommunityIcons' />
            </View>
          </Right>
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
  cardItemFirst: {
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 4,
    paddingRight: 4,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },
  cardItemBody: {
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 4,
    paddingRight: 4,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0
  },
  cardItemLast: {
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 4,
    paddingRight: 4,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    backgroundColor: '#f7f7f7',
  }
});

export default Product;