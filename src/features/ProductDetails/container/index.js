import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import StyleProviderWrapper from '../../../shared/StyleProviderWrapper';

import {
  Container, Content, Header, Body, Title, Text, Icon, Left,
  Button, Right, Form, Input, View, Item, Picker, DatePicker, Grid, Col, Radio,
  Row, Card, CardItem, Footer, FooterTab
} from 'native-base';

import FastImage from 'react-native-fast-image';
import moment from 'moment';

import {
  observer, inject
} from 'mobx-react';

import { Navigation } from '../../../services';


@inject('UserStore', 'ProductsStore')
@observer
class ProductDetails extends Component {
  render() {

    const {
      openSansBold, contentStyle, cardStyle, container, flatButton
    } = styles;

    const { UserStore, ProductsStore } = this.props;

    const {
      name, type, breed, age, adg, backfat_thickness, fcr, img_path, birthdate
    } = ProductsStore.selectedProduct;

    return (
      <StyleProviderWrapper>
        <Container>
          <Header noShadow androidStatusBarColor='#ffffff'>
            <Left style={[contentStyle]}>
              <Button transparent onPress={Navigation.back}>
                <Icon type='Feather' name='arrow-left' style={{ color: '#000000' }} />
              </Button>
            </Left>
            <Body style={{ flex: 3, alignItems: 'center' }}>
              <Title style={[openSansBold, { color: '#000000' }]}>
                Product Details
            </Title>
            </Body>
            <Right />
          </Header>
          <Content>
            <Card style={[cardStyle]}>
              <CardItem cardBody style={[container]}>
                <FastImage
                  style={{ width: 200, height: 200 }}
                  source={{
                    uri: 'https://kids.nationalgeographic.com/content/dam/kids/photos/animals/Mammals/H-P/pig-full-body.adapt.945.1.jpg',
                    priority: FastImage.priority.normal,
                  }}
                  resizeMode={FastImage.resizeMode.contain}
                />
              </CardItem>
            </Card>
            <Card style={[cardStyle]}>
              <CardItem cardBody style={[container]}>
                <Grid>
                  <Row style={{ paddingHorizontal: 10, marginBottom: 5 }}>
                    <Col>
                      <Text style={[openSansBold, { fontSize: 15 }]}>Name</Text>
                    </Col>
                    <Col>
                      <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <Text style={[openSansBold, { fontSize: 16 }]}>{name}</Text>
                      </View>
                    </Col>
                  </Row>
                  <Row style={{ paddingHorizontal: 10, marginBottom: 5 }}>
                    <Col>
                      <Text style={[openSansBold, { fontSize: 15 }]}>Breed</Text>
                    </Col>
                    <Col>
                      <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <Text style={[openSansBold, { fontSize: 16 }]}>{breed}</Text>
                      </View>
                    </Col>
                  </Row>
                  <Row style={{ paddingHorizontal: 10, marginBottom: 5 }}>
                    <Col>
                      <Text style={[openSansBold, { fontSize: 15 }]}>Type</Text>
                    </Col>
                    <Col>
                      <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <Text style={[openSansBold, { fontSize: 16 }]}>{type}</Text>
                      </View>
                    </Col>
                  </Row>
                  <Row style={{ paddingHorizontal: 10, marginBottom: 20 }}>
                    <Col>
                      <Text style={[openSansBold, { fontSize: 15 }]}>Born on</Text>
                    </Col>
                    <Col>
                      <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <Text style={[openSansBold, { fontSize: 14 }]}>{moment(birthdate).format('LL')}</Text>
                        <Text style={[openSansBold, { fontSize: 14 }]}>&nbsp;({age} days old)</Text>
                      </View>
                    </Col>
                  </Row>
                  <Row style={{ paddingHorizontal: 10, marginBottom: 5 }}>
                    <Col>
                      <Text style={[openSansBold, { fontSize: 14 }]}>Average Daily Gain</Text>
                    </Col>
                    <Col>
                      <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <Text style={[openSansBold, { fontSize: 15, color: '#00af66' }]}>{adg} g</Text>
                      </View>
                    </Col>
                  </Row>
                  <Row style={{ paddingHorizontal: 10, marginBottom: 5 }}>
                    <Col>
                      <Text style={[openSansBold, { fontSize: 14 }]}>Feed Conversion Ratio</Text>
                    </Col>
                    <Col>
                      <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <Text style={[openSansBold, { fontSize: 15, color: '#00af66' }]}> {fcr}</Text>
                      </View>
                    </Col>
                  </Row>
                  <Row style={{ paddingHorizontal: 10, marginBottom: 5 }}>
                    <Col>
                      <Text style={[openSansBold, { fontSize: 14 }]}>Backfat Thickness</Text>
                    </Col>
                    <Col>
                      <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <Text style={[openSansBold, { fontSize: 15, color: '#00af66' }]}> {backfat_thickness} mm</Text>
                      </View>
                    </Col>
                  </Row>
                </Grid>
              </CardItem>
            </Card>
          </Content>
          {
            UserStore.userRole === 'Customer' && <Footer>
              <View style={[container]}>
                <Button
                  block
                  onPress={this.addNewProduct}
                  style={[flatButton, { backgroundColor: '#00af66' }]}
                >
                  <Text uppercase={false} style={[openSansBold, { fontSize: 16 }]}>Add to Cart</Text>
                </Button>
              </View>
            </Footer>
          }
        </Container>
      </StyleProviderWrapper>
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
  },
  flatButton: {
    elevation: 0,
    borderColor: 'transparent',
    borderBottomWidth: 0
  },
});

export default ProductDetails;