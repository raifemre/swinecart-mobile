import React, { Component } from 'react';

import {
  StyleSheet, FlatList, ScrollView
} from 'react-native';

import {
  Container, Content, Header, Body, Title, StyleProvider, Card, CardItem, Text,
  List, ListItem, Grid, Col, View
} from 'native-base';

class Reviews extends Component {

  render() {

    const {
      container, openSansBold, openSansSemiBold
    } = styles;

    return (
      <React.Fragment>
        <Card>
          <CardItem header style={[container]}>
            <Text style={[openSansBold, { color: '#000000', fontSize: 20 }]}>Overall Average Rating</Text>
          </CardItem>
          <CardItem header style={[container]}>
            <Text style={[openSansBold, { color: '#000000', fontSize: 30 }]}>0 / 5</Text>
          </CardItem>
          <CardItem header style={[container]}>
            <Text style={[openSansBold, { color: '#000000', fontSize: 20 }]}>Number of Reviews: 0</Text>
          </CardItem>
          <CardItem>
            <Body style={[container]}>
              <Grid>
                <Col>
                  <Text style={[openSansSemiBold]}>Delivery: 0</Text>
                </Col>
                <Col>
                  <Text style={[openSansSemiBold]}>Transaction: 0</Text>
                </Col>
                <Col>
                  <Text style={[openSansSemiBold]}>Product Quality: 0</Text>
                </Col>
              </Grid>
            </Body>
          </CardItem>
        </Card>
        <View style={[container, { marginTop: 20 }]}>
          <Text style={[openSansBold, { color: '#000000', fontSize: 20 }]}>Customer Reviews</Text>
        </View>
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

export default Reviews;