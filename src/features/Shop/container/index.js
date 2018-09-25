import React, { PureComponent } from 'react';

import {
  StyleSheet
} from 'react-native';

import {
  Container, Content, Text, Header, Body, Title, StyleProvider, Left, Right,
  Icon, Item, Input, Button
} from 'native-base';

import {
  debounce
} from 'lodash';

import commonColor from '../../../../native-base-theme/variables/commonColor';
import getTheme from '../../../../native-base-theme/components';

class Shop extends PureComponent {

  constructor() {
    super();
    this.onChangeDeb = debounce(this.onChangeText, 500);
    this.state = {
      input: null
    }
  }
  delay = (fn, ms) => {
    setTimeout(fn, ms);
  }

  filter = () => {
    this.delay(() => {
      alert('Filter!');
    }, 10);
  }

  onChangeText = value => {
    this.setState({
      input: value
    });
  }

  render() {

    const {
      container, openSansBold, openSansSemiBold, openSansRegular
    } = styles;

    const { input } = this.state;

    return (
      <StyleProvider style={getTheme(commonColor)}>
        <Container>
          <Header noShadow androidStatusBarColor='#ffffff' searchBar rounded noLeft>
            <Body style={{ flexDirection: 'row' }}>
              <Item
                style={{ flex: 1, backgroundColor: '#f7f7f7', borderRadius: 50, borderBottomColor: 'transparent', height: 44 }}
              >
                <Icon
                  type='FontAwesome'
                  name='search'
                  style={{ fontSize: 15, marginLeft: 10 }}
                />
                <Input
                  placeholder='Search'
                  onChangeText={this.onChangeDeb}
                  style={[openSansRegular]}
                />
              </Item>
              <Button 
                transparent
                onPress={this.filter}
              >
                <Icon
                  type='FontAwesome'
                  name='filter'
                  style={{ color: '#000000' }}
                />
              </Button>
            </Body>
          </Header>
          <Content>
            <Text styles={[openSansSemiBold]}>
            </Text>
          </Content>
        </Container>
      </StyleProvider>
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
  openSansRegular: {
    fontFamily: 'OpenSans-Regular'
  },
  flatButton: {
    elevation: 0,
    borderColor: 'transparent',
    borderBottomWidth: 0
  }
});

export default Shop;