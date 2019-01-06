import React, { Component } from 'react';
import {
  StyleSheet, FlatList
} from 'react-native';

import { NavigationEvents } from 'react-navigation';

import {
  Container, Content, Header, Body, Title, StyleProvider
} from 'native-base';

import {
  observer, inject
} from 'mobx-react';

import {
  toJS
} from 'mobx';

import commonColor from '../../../../native-base-theme/variables/commonColor';
import getTheme from '../../../../native-base-theme/components';

import Notification from '../components/Notification';

@inject(['NotificationStore'])
@observer
class Notifications extends Component {

  renderItem = ({ item }) => {
    const { data: { description, time: { date } } } = item;
    const message = description.replace(/(<b>|<\/b>)/g, '');
    return <Notification message={message} date={date}/>
  }

  render() {

    const {
      NotificationStore
    } = this.props;

    const {
      container, openSansBold
    } = styles;

    return (
      <React.Fragment>
        <NavigationEvents
          onDidFocus={() => NotificationStore.seeNotifs()}
        />
        <StyleProvider style={getTheme(commonColor)}>
          <Container>
            <Header noShadow androidStatusBarColor='#ffffff'>
              <Body style={[container]}>
                <Title style={[openSansBold, { color: '#000000' }]}>
                  Notifications
              </Title>
              </Body>
            </Header>
            <Content padder>
              <FlatList
                data={toJS(NotificationStore.notifs)}
                renderItem={this.renderItem}
                keyExtractor={item => item.id}
              />
            </Content>
          </Container>
        </StyleProvider>
      </React.Fragment>
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
  }
});

export default Notifications;