import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import {
  Container, Content, Text, Left,
  Button, Right, View, Grid, Col,
  Row, Card, CardItem, Footer
} from 'native-base';

import moment from 'moment';

import {
  observer, inject
} from 'mobx-react';

import HeaderWrapper from '../../../shared/HeaderWrapper';
import BodyWrapper from '../../../shared/BodyWrapper';
import BackButton from '../../../shared/BackButton';
import TextWrapper from '../../../shared/TextWrapper';

import ImageSlider from '../components/ImageSlider';
import DataRow from '../components/DataRow';

import { formatBirthdate } from '../../../utils';
@inject('ShopStore')
@observer
class ProductDetails extends Component {

  render() {

    const {
      contentStyle
    } = styles;

    const { navigation } = this.props;
    
    const product = navigation.getParam('product');
    const { 
      name, breed, type, imageCollection, adg, fcr, backfat_thickness,
      breeder, birthdate, farm_province, other_details
    } = product;
    const details = other_details.split(',');
    return (
      <Container>
        <HeaderWrapper>
          <Left style={[contentStyle]}>
            <BackButton />
          </Left>
          <BodyWrapper title='Product Details' />
          <Right />
        </HeaderWrapper>
        <Content>
          <ImageSlider images={imageCollection} />
          <View style={{ padding: 16 }}>
            <TextWrapper size={28} text={name} color='#000000' />
            <Grid>
              <Row>
                <Col>
                  <TextWrapper size={14} text='Breeder' color='#8E8E8E' />
                </Col>
                <Col>
                  <TextWrapper size={14} text={breeder} color='#000000' />
                </Col>
              </Row>
              <Row>
                <Col>
                  <TextWrapper size={14} text='Farm Location' color='#8E8E8E' />
                </Col>
                <Col>
                  <TextWrapper size={14} text={farm_province} color='#000000' />
                </Col>
              </Row>
              <Row>
                <Col>
                  <TextWrapper size={14} text='Breed' color='#8E8E8E' />
                </Col>
                <Col>
                  <TextWrapper size={14} text={breed} color='#000000' />
                </Col>
              </Row>
              <Row>
                <Col>
                  <TextWrapper size={14} text='Type' color='#8E8E8E' />
                </Col>
                <Col>
                  <TextWrapper size={14} text={type} color='#000000' />
                </Col>
              </Row>
              <Row>
                <Col>
                  <TextWrapper size={14} text='Birth Date' color='#8E8E8E' />
                </Col>
                <Col>
                  <TextWrapper size={14} text={birthdate} color='#000000' />
                </Col>
              </Row>
            </Grid>
            <Grid style={{ marginTop: 16 }}>
              <Row>
                <Col>
                  <TextWrapper size={14} text='Average Daily Gain (g)' color='#8E8E8E' />
                </Col>
                <Col>
                  <TextWrapper size={14} text={adg} color='#000000' />
                </Col>
              </Row>
              <Row>
                <Col>
                  <TextWrapper size={14} text='Feed Conversion Ratio' color='#8E8E8E' />
                </Col>
                <Col>
                  <TextWrapper size={14} text={fcr} color='#000000' />
                </Col>
              </Row>
              <Row>
                <Col>
                  <TextWrapper size={14} text='Backfat Thickness (mm)' color='#8E8E8E' />
                </Col>
                <Col>
                  <TextWrapper size={14} text={backfat_thickness} color='#000000' />
                </Col>
              </Row>
            </Grid>
            <Grid style={{ marginTop: 16 }}>
              <Row>
                <TextWrapper size={20} text='Other Details' color='#000000' />
              </Row>
            </Grid>
            <Grid style={{ marginTop: 8 }}>
              {details.map((d, i) => {
                if(d === '') return null;
                else {
                  const [char, value] = d.split('=');
                  return (
                    <Row key={i}>
                      <Col>
                        <TextWrapper size={14} text={char} color='#8E8E8E' />
                      </Col>
                      <Col>
                        <TextWrapper size={14} text={value} color='#000000' />
                      </Col>
                    </Row>
                  );
                }
              })}
            </Grid>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  contentStyle: {
    flex: 1,
  },
});

export default ProductDetails;