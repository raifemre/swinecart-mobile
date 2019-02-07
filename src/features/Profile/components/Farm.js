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

  render() {

    const { cardStyle, container } = styles;
    const { farm } = this.props;

    return (
      <View style={{ paddingHorizontal: 5 }}>
        <Card style={[cardStyle]}>
          <CardItem style={{ paddingVertical: 5 }}>
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
                    color={'#000000'}
                    text={`Farm Province: ${startCase(farm.province)}`}
                    size={13}
                  />
                </Row>
                <Row>
                  <TextWrapper
                    font={'OpenSans-Bold'}
                    color={'#7f8c8d'}
                    text={`Farm Type: ${startCase(farm.farmType)}`}
                    size={12}
                  />
                </Row>
              </Grid>
            </Body>
            <Right>
              <Grid style={[container]}>
                <Col style={{ marginRight: 4}}>
                  <FlatButton transparent onPress={this.logout}>
                    <IconWrapper
                      name='edit'
                      style={{ fontSize: 26, color: '#2980b9' }}
                    />
                  </FlatButton>
                </Col>
                <Col style={{ marginLeft: 4 }}>
                  <FlatButton transparent onPress={this.logout}>
                    <IconWrapper
                      name='delete-forever'
                      style={{ fontSize: 26, color: '#e74c3c' }}
                    />
                  </FlatButton>
                </Col>
              </Grid>
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