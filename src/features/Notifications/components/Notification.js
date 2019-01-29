import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { StyleSheet } from 'react-native';
import InViewPort from '../../../shared/InViewPort';
import TextWrapper from '../../../shared/TextWrapper';
import { Card, CardItem, Body, View } from 'native-base';
@inject('NotificationStore')
@observer
class Notification extends Component {

  componentDidMount() {
    
  }


  onPress = () => {
    const { notification } = this.props;
    const { id } = notification;
    console.log(id);
  }

  onVisible = isVisible => {
    if (isVisible) {
      const { notification, NotificationStore } = this.props;
      if (!notification.read_at) {
        NotificationStore.readNotification(notification.id);
      }
    }
  }

  render() {
    const { cardStyle } = styles;
    const { notification } = this.props;
    
    return (
      <View style={{ paddingHorizontal: 10 }}>
        <Card style={[cardStyle]}>
          <CardItem button onPress={this.onPress}>
            <Body>
              <TextWrapper
                font={'OpenSans-Bold'}
                text={notification.message}
                size={14}
              />
              <TextWrapper
                font={'OpenSans-Bold'}
                color={'#7f8c8d'}
                text={notification.ago}
                size={13}
              />
            </Body>
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