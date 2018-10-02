import React, { PureComponent } from 'react';

import {
  StyleSheet, View, Image
} from 'react-native';

import {
  Card, CardItem, Body, Text
} from 'native-base';

import { withNavigation } from 'react-navigation';
import FastImage from 'react-native-fast-image';
import Divider from 'react-native-divider';

class GridItem extends PureComponent {

  navigateTo(route, data) {
    this.props.navigation.navigate(route, data);
  }

  render() {
    const {
      product
    } = this.props;

    const {
      name, age
    } = product;


    const {
      openSansBold, openSansSemiBold, openSansRegular, cardItemStyle, cardStyle, container, topCardItem
    } = styles;
        
    return (
      <Card style={[cardStyle]}>
        <CardItem cardBody style={topCardItem}>
          <Body style={[container]}>
            <FastImage
              style={[{width: 150, height: 150}]}
              source={{
                uri: 'https://kids.nationalgeographic.com/content/dam/kids/photos/animals/Mammals/H-P/pig-full-body.adapt.945.1.jpg',
                priority: FastImage.priority.normal,
              }}
              resizeMode={FastImage.resizeMode.contain}
            />
          </Body>
        </CardItem>
        <CardItem style={{ backgroundColor: '#ffffff', borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
          <Body style={{ flex: 1 }}>
            <Text style={[openSansBold]}>{name}</Text>
          </Body>
        </CardItem>
        <CardItem style={{ backgroundColor: '#ffffff', borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
          <Body style={{flex: 1}}>
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
  backgroundWhite: {
    backgroundColor: '#ffffff'
  },
  backgroundPrimary: {
    backgroundColor: '#00af66'
  },
  openSansBold: {
    fontFamily: 'OpenSans-Bold'
  },
  openSansSemiBold: {
    fontFamily: 'OpenSans-SemiBold'
  },
  openSansRegular: {
    fontFamily: 'OpenSans-Regular'
  },
  cardStyle: {
    borderColor: 'transparent',
    borderRadius: 10,
    borderColor: '#f7f7f7',
    shadowColor: '#f7f7f7',
    shadowRadius: 0.1,
    elevation: 1 
  },
  cardItemStyle: {
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topCardItem: {
    backgroundColor: '#ffffff',
    // backgroundColor: '#000000',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  }
});


export default withNavigation(GridItem);