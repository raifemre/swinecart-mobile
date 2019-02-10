import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { observer, inject } from 'mobx-react';
import { Card, CardItem, View, Right, Body, Grid, Row } from 'native-base';
import { toJS } from 'mobx';
import { startCase } from 'lodash';

import TextWrapper from '../../../shared/TextWrapper';
import FlatButton from '../../../shared/FlatButton';
import IconWrapper from '../../../shared/IconWrapper';

import Navigation from '../../../services/navigation';


@inject('UserStore')
@observer
class Farm extends Component {

  goToFarm = () => {
    Navigation.navigate('FarmDetails', { farm });
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
                <IconWrapper name='arrow-forward' size={26} color='#000000' />
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