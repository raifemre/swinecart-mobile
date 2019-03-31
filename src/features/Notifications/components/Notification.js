import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { StyleSheet } from 'react-native';
import { Card, CardItem, Body, View, Left, Right } from 'native-base';

import TextWrapper from '../../../shared/TextWrapper';
import IconButton from '../../../shared/IconButton';
@inject('NotificationStore')
@observer
class Notification extends Component {

  onPress = () => {
    const { notification } = this.props;
    const { id } = notification;
    console.dir(id);
  }

  render() {
    const { cardStyle } = styles;
    const { notification } = this.props;
    
    return (
      <View style={{ paddingHorizontal: 10 }}>
        <Card style={[cardStyle]}>
          <CardItem>
            <Left>

            </Left>
            <Body style={{ flex: 4 }}>
              <TextWrapper
                font={'OpenSans-Bold'}
                text={notification.message}
                color={notification.read_at ? '#7f8c8d' : '#000000'}
                numberOfLines={5}
                size={12}

              />
              <TextWrapper
                font={'OpenSans-Bold'}
                color={'#7f8c8d'}
                text={notification.created_at}
                size={12}
              />
            </Body>
            <Right>
              <IconButton
                marginLeft={0}
                marginRight={0}
                size={24}
                name='more-vert'
                type='MaterialIcons'
                onPress={this.onPress}
              />
            </Right>
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
    shadowColor: '#f7f7f7',
    shadowRadius: 0,
    elevation: 1,
  }
});

export default Notification;