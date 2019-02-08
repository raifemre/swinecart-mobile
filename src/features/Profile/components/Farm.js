import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { observer, inject } from 'mobx-react';
import { Card, CardItem, View, Right, Body, Button, Text, Grid, Row, Col } from 'native-base';

import TextWrapper from '../../../shared/TextWrapper';
import FlatButton from '../../../shared/FlatButton';
import IconWrapper from '../../../shared/IconWrapper';

import { toJS } from 'mobx';

import { startCase } from 'lodash';

@inject('UserStore')
@observer
class Farm extends Component {


  goToFarm = () => {

  }

  render() {

    const { cardStyle } = styles;
    const { farm } = this.props;

    return (
      <View style={{ paddingHorizontal: 5 }}>
        <Card style={[cardStyle]}>
          <CardItem>
            <Body style={{ flex: 3 }}>
              <Grid>
                <Row>
                  <TextWrapper
                    font={'OpenSans-Bold'}
                    color={'#000000'}
                    text={`Farm Name: ${startCase(farm.name)}`}
                    size={15}
                  />
                </Row>
                <Row>
                  <TextWrapper
                    font={'OpenSans-Bold'}
                    color={'#7f8c8d'}
                    text={`Farm Province: ${startCase(farm.province)}`}
                    size={13}
                  />
                </Row>
              </Grid>
            </Body>
            <Right>
              <FlatButton transparent onPress={this.goToFarm}>
                <IconWrapper
                  name='edit'
                  style={{ fontSize: 26, color: '#2980b9' }}
                />
              </FlatButton>
            </Right>
          </CardItem>
        </Card>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardStyle: {
    borderRadius: 0,
    borderColor: 'transparent',
    borderColor: '#f7f7f7',
    shadowColor: '#f7f7f7',
    shadowRadius: 0,
    elevation: 2,
  }
}); 

export default Farm;