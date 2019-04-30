import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { StyleSheet } from 'react-native';
import { Card, CardItem, Body, View, Left, Right } from 'native-base';

import TextWrapper from '../../../shared/TextWrapper';
import IconButton from '../../../shared/IconButton';

import { fromNow } from '../../../utils';
import { toJS } from 'mobx';
import Navigation from '../../../services/navigation';

@inject('NotificationStore')
@observer
class Notification extends Component {

  onPress = () => {
    const { notification, NotificationStore } = this.props;
    const { id, type } = notification;
    // NotificationStore.seeNotification(id);
    if (type === 'BreederRated') {
      Navigation.navigate('Dashboard');
    }
    else if (type === 'ProductRequested') {
      // const index = { index: 1 }
      Navigation.navigate('ProductInventory', { selectedIndex: 1 });
    }
  }
  
  render() {
    const { cardStyle } = styles;
    const { notification } = this.props;
    
    // console.dir(toJS(notification));
    return (
      <View style={{ paddingHorizontal: 5 }}>
        <Card style={[cardStyle]}>
          <CardItem>
            <Body style={{ flex: 4 }}>
              <TextWrapper
                font={'OpenSans-Bold'}
                text={notification.message}
                color={notification.read_at ? '#7f8c8d' : '#000000'}
                numberOfLines={5}
                size={14}

              />
              <TextWrapper
                font={'OpenSans-Bold'}
                color={notification.read_at ? '#7f8c8d' : '#000000'}
                text={fromNow(notification.created_at)}
                size={12}
              />
            </Body>
            <Right>
              <IconButton
                marginLeft={0}
                marginRight={0}
                size={24}
                name='keyboard-arrow-right'
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