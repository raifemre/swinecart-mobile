import React, { PureComponent } from 'react';

import {
  StyleSheet
} from 'react-native';

import {
  Text, Card, CardItem, Body, Left
} from 'native-base'

import moment from 'moment';

class Notification extends PureComponent {

  render() {
    const { message, date } = this.props;
    const {
      openSansBold, openSansSemiBold, cardStyle, container
    } = styles;

    const ago = moment(date).fromNow();

    return (
      <Card style={[cardStyle]}>
        <CardItem>
          <Body>
            <Text style={[openSansSemiBold]}>{message}</Text>
            <Text style={[openSansSemiBold, { fontSize: 12 }]}>{ago}</Text>
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
    shadowRadius: 0.1,
    elevation: 1
  }
});

export default Notification;