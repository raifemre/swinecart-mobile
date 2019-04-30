import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { observer, inject } from 'mobx-react';
import { Card, CardItem, View, Right, Body, Grid, Row } from 'native-base';
import { toJS } from 'mobx';
import { startCase } from 'lodash';

import TextWrapper from '../../../shared/TextWrapper';
import IconButton from '../../../shared/IconButton';

import Navigation from '../../../services/navigation';


@inject('UserStore')
@observer
class Farm extends Component {

  goToFarm = () => {
    const { farm } = this.props;
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
                    size={12}
                  />
                </Row>
              </Grid>
            </Body>
            <Right>
              <IconButton
                marginLeft={0}
                marginRight={0}
                size={24}
                name='keyboard-arrow-right'
                type='MaterialIcons'
                onPress={this.goToFarm}
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardStyle: {
    borderRadius: 5,
    borderColor: 'transparent',
    borderColor: '#f7f7f7',
    shadowColor: '#f7f7f7',
    shadowRadius: 0,
    elevation: 1,
  }
}); 

export default Farm;