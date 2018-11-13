import React, { Component } from 'react';

import {
  StyleSheet, FlatList, ScrollView
} from 'react-native';

import {
  Container, Content, Header, Body, Title, StyleProvider, Card, CardItem, Text,
  List, ListItem, Grid, Col
} from 'native-base';

class StatCard extends Component {

  render() {
    
    const {
      container, openSansBold, openSansSemiBold
    } = styles;
    
    const { 
      title, data
    } = this.props;

    const {
      boar, sow, gilt, semen
    } = data;

    const total = boar + sow + gilt + semen;

    return (
      <Card>
        <CardItem header style={[container]}>
          <Text style={[openSansBold, { color: '#000000', fontSize: 20 }]}>{title}</Text>
        </CardItem>
        <CardItem header style={[container]}>
          <Text style={[openSansBold, { color: '#000000', fontSize: 20 }]}>{total}</Text>
        </CardItem>
        <CardItem>
          <Body style={[container]}>
            <Grid>
              <Col>
                <Text style={[openSansSemiBold]}>Boar: {boar}</Text>
              </Col>
              <Col>
                <Text style={[openSansSemiBold]}>Sow: {sow}</Text>
              </Col>
              <Col>
                <Text style={[openSansSemiBold]}>Gilt: {gilt}</Text>
              </Col>
              <Col>
                <Text style={[openSansSemiBold]}>Semen: {semen}</Text>
              </Col>
            </Grid>
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
  }
});

export default StatCard;