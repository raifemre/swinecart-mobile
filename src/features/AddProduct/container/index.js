import React, { Component } from 'react';
import {
  StyleSheet
} from 'react-native';

import {
  Container, Content, Header, Body, Title, StyleProvider, Text, Icon, Left,
  Button, Right, Form, Input, View, Item, Picker, DatePicker, Grid, Col, Radio, 
  ListItem, Row
} from 'native-base';

import {
  observer, inject
} from 'mobx-react';

import commonColor from '../../../../native-base-theme/variables/commonColor';
import getTheme from '../../../../native-base-theme/components';

import {
  Navigation
} from '../../../services';

class AddProduct extends Component {

  state = {
    selected2: undefined,
    chosenDate: new Date(),
    breed: 'Pure',
    otherDetails: [
      { characteristic: '', value: '' }
    ]
  }

  onValueChange = value => {
    this.setState({
      selected2: value
    });
  }

  setDate = (newDate) => {
    this.setState({ chosenDate: newDate });
  }

  setBreed = value => {
    this.setState({
      breed: value
    });
  }

  addMoreCharac = () => {
    this.setState(prevState => ({
      otherDetails: [...prevState.otherDetails, { characteristic: '', value: '' }]
    }))
  }

  removeCharac = (e) => {
    const array = this.state.otherDetails.filter(a => a != e);
    this.setState({
      otherDetails: array
    });
  }

  addNewProduct = () => {
    console.log('Add Product!');
  }

  render() {
    const {
      openSansBold, contentStyle, container, openSansSemiBold, flatButton
    } = styles;

    return (
      <StyleProvider style={getTheme(commonColor)}>
        <Container>
          <Header noShadow androidStatusBarColor='#ffffff'>
            <Left style={[contentStyle]}>
              <Button transparent onPress={Navigation.back}>
                <Icon type='Feather' name='arrow-left' style={{ color: '#000000' }} />
              </Button>
            </Left>
            <Body style={{ flex: 1, alignItems: 'center' }}>
              <Title style={[openSansBold, { color: '#000000' }]}>
                Add Product
              </Title>
            </Body>
            <Right />
          </Header>
          <Content padder>
            <View>
              <View style={[container]}>
                <Text style={[openSansBold, { color: '#000000', fontSize: 22 }]}>Swine Information</Text>
              </View>
              <View>
                <Form>
                  <Item>
                    <Input placeholder='Name' style={[openSansSemiBold]} onChangeText={this.handleEmailChange} />
                  </Item>
                  <Item >
                    <Picker
                      mode="dropdown"
                      iosIcon={<Icon name="ios-arrow-down-outline" />}
                      placeholder='Choose Type'
                      placeholderStyle={[openSansSemiBold]}
                      selectedValue={this.state.selected2}
                      onValueChange={this.onValueChange}
                      textStyle={[openSansSemiBold]}
                      itemTextStyle={[openSansSemiBold]}
                    >
                      <Picker.Item label="Boar" value="Boar" />
                      <Picker.Item label="Sow" value="Sow" />
                      <Picker.Item label="Gilt" value="Gilt" />
                      <Picker.Item label="Semen" value="Semen" />
                    </Picker>
                  </Item>
                  <Item >
                    <Picker
                      mode="dropdown"
                      iosIcon={<Icon name="ios-arrow-down-outline" />}
                      placeholder='Choose Farm From'
                      placeholderStyle={[openSansSemiBold]}
                      selectedValue={this.state.selected2}
                      onValueChange={this.onValueChange}
                    >
                      <Picker.Item label="Farm 1" value="key0" />
                      <Picker.Item label="Farm 2" value="key1" />
                      <Picker.Item label="Farm 3" value="key2" />
                      <Picker.Item label="Farm 4" value="key3" />
                      <Picker.Item label="Farm 5" value="key4" />
                    </Picker>
                  </Item>
                  <Item>
                    <Input placeholder='Price' style={[openSansSemiBold]} onChangeText={this.handleEmailChange} />
                  </Item>
                </Form>
              </View>
            </View>
            <View style={{ marginTop: 20 }}>
              <View style={[container]}>
                <Text style={[openSansBold, { color: '#000000', fontSize: 22 }]}>Breed Information</Text>
              </View>
              <View>
                <Grid style={{ paddingHorizontal: 20 }}>
                  <Col style={[container]}>
                    <View style={{ flexDirection: 'row' }}>
                      <Radio
                        selectedColor='#00af66'
                        selected={this.state.breed === 'Pure'}
                        onPress={() => this.setBreed('Pure')}
                      />
                      <Text style={[openSansBold, { color: '#000000', fontSize: 16, marginLeft: 5 }]}>Pure Breed</Text>
                    </View>
                  </Col>
                  <Col style={[container]}>
                    <View style={{ flexDirection: 'row'}}>
                      <Radio
                        selectedColor='#00af66'
                        selected={this.state.breed === 'Cross'}
                        onPress={() => this.setBreed('Cross')}
                      />
                      <Text style={[openSansBold, { color: '#000000', fontSize: 16, marginLeft: 5 }]}>Cross Breed</Text>
                    </View>
                  </Col>
                </Grid>
                <Form>
                  {
                    this.state.breed === 'Pure' && <Item>
                      <Input placeholder="Breed" style={[openSansSemiBold]} onChangeText={this.handleEmailChange} />
                    </Item>
                  }
                 {
                    this.state.breed === 'Cross' && <React.Fragment>
                      <Item>
                        <Input placeholder="Father's Breed" style={[openSansSemiBold]} onChangeText={this.handleEmailChange} />
                      </Item>
                      <Item>
                        <Input placeholder="Mother's Breed" style={[openSansSemiBold]} onChangeText={this.handleEmailChange} />
                      </Item>
                    </React.Fragment>
                 } 
                  <Item>
                    <DatePicker
                      defaultDate={new Date()}
                      locale={"ph"}
                      animationType={"fade"}
                      androidMode={"default"}
                      placeHolderText="Birth Date"
                      textStyle={[openSansSemiBold, { color: "#000000", paddingLeft: 5 }]}
                      placeHolderTextStyle={[openSansSemiBold, { color: "#000000", paddingLeft: 5 }]}
                      onDateChange={this.setDate}
                    />
                  </Item>
                  <Item>
                    <Input keyboardType='numeric' placeholder='Average Daily Gain (grams)' style={[openSansSemiBold]} onChangeText={this.handleEmailChange} />
                  </Item>
                  <Item>
                    <Input keyboardType='numeric' placeholder='Feed Conversion Ratio' style={[openSansSemiBold]} onChangeText={this.handleEmailChange} />
                  </Item>
                  <Item>
                    <Input keyboardType='numeric' placeholder='Backfat Thickness (mm)' style={[openSansSemiBold]} onChangeText={this.handleEmailChange} />
                  </Item>
                </Form>
              </View>
              <View style={{ marginTop: 20 }}>
                <View style={[container]}>
                  <Text style={[openSansBold, { color: '#000000', fontSize: 22 }]}>Other Details</Text>
                </View>
                <View>
                 <View style={[container]}>
                  <Button transparent onPress={this.addMoreCharac}>
                    <Icon type='Feather' name='plus' style={{ color: '#000000' }} />
                    <Text style={[openSansBold, { color: '#000000', fontSize: 14 }]}>Add More</Text>
                  </Button>
                 </View>
                 <Grid>
                  {
                    this.state.otherDetails.map((o, i)=> (
                      <Row key={i}>
                        <Col>
                          <Form>
                            <Item>
                              <Input placeholder='Characteristic' style={[openSansSemiBold]} onChangeText={this.handleEmailChange} />
                            </Item>
                          </Form>
                        </Col>
                        <Col>
                          <Form>
                            <Item>
                              <Input placeholder='Value' style={[openSansSemiBold]} onChangeText={this.handleEmailChange} />
                            </Item>
                          </Form>
                        </Col>
                        <Button transparent onPress={() => this.removeCharac(o)}>
                          <Icon type='Feather' name='minus' style={{ color: '#000000' }} />
                        </Button>
                      </Row>
                    ))
                  }
                 </Grid>
                </View>
              </View>
              <View style={{ marginTop: 20 }}>
                <Button
                  block
                  onPress={this.addNewProduct}
                  style={[flatButton, { backgroundColor: '#00af66' }]}
                >
                  <Text uppercase={false} style={[openSansBold, { fontSize: 16 }]}>Add Product</Text>
                </Button>
              </View>
            </View>
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
  flatButton: {
    elevation: 0,
    borderColor: 'transparent',
    borderBottomWidth: 0
  },
});

export default AddProduct;