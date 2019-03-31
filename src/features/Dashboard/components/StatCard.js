import React, { Component } from 'react';

import { StyleSheet } from 'react-native';

import { Card, CardItem, Grid, Col, Row } from 'native-base';

import { observer } from 'mobx-react';
import TextWrapper from '../../../shared/TextWrapper';

import StatRow from './StatRow';

@observer
class StatCard extends Component {

  render() {
    
    const { container, cardStyle } = styles;
    
    const { title, data } = this.props;

    const { boar, sow, gilt, semen } = data;

    const total = boar + sow + gilt + semen;

    return (
      <Card style={[cardStyle]}>
        <CardItem style={{ backgroundColor: '#00695C' }}>
          <Grid>
            <Row style={[container]}>
              <TextWrapper
                color='#ffffff'
                text={title}
                font='OpenSans-Bold'
                size={14}
              />
            </Row>
            <Row style={[container, { marginBottom: 20 }]}>
              <TextWrapper
                color='#ecf0f1'
                text={total}
                font='OpenSans-Bold'
                size={28}
              />
            </Row>
            <Row>
              <Col>
                <StatRow text='Boar' data={boar} />
              </Col>
              <Col>
                <StatRow text='Sow' data={sow} />
              </Col>
            </Row>
            <Row>
              <Col>
                <StatRow text='Gilt' data={gilt} />
              </Col>
              <Col>
                <StatRow text='Semen' data={semen} />
              </Col>
            </Row>
          </Grid>
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
  cardStyle: {
    borderColor: 'transparent',
    borderColor: '#f7f7f7',
    shadowColor: '#f7f7f7',
    shadowRadius: 0.1,
    elevation: 1,
    flex: 1
  }
});

export default StatCard;