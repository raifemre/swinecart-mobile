import React, { Component } from 'react';
import {
  StyleSheet
} from 'react-native';

import {
  Container, Content, Header, Body, Title, StyleProvider, Text, Icon, Left,
  Button, Right, Form, Input, View, Item, Picker, DatePicker, Grid, Col, Radio,
  Row
} from 'native-base';

import {
  observer, inject
} from 'mobx-react';

import { 
  toJS
} from 'mobx';

import moment from 'moment';

import commonColor from '../../../../native-base-theme/variables/commonColor';
import getTheme from '../../../../native-base-theme/components';

import {
  Navigation
} from '../../../services';

@inject('UserStore', 'ProductsStore')
@observer
class EditProduct extends Component {


  componentDidMount() {
    const { ProductsStore } = this.props;
    const {
      selectedProduct
    } = ProductsStore;

    if(selectedProduct.breed.includes('+')) {
      const [ fatherBreed, motherBreed ] = selectedProduct.breed.split('+');
      selectedProduct.fatherBreed = fatherBreed;
      selectedProduct.motherBreed = motherBreed;
    }

    console.log(toJS(ProductsStore.selectedProduct));
  }

  state = {
    chosenDate: new Date(),
    breed: 'Pure',
    otherDetails: [
      { characteristic: '', value: '' }
    ]
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

  toggleRadio = breed => {
    this.setState({ breed });
  }

  handleTextChange = (i, field, value) => {
    const otherDetails = JSON.parse(JSON.stringify(this.state.otherDetails));
    otherDetails[i][field] = value;
    this.setState({ otherDetails });
  }

  addNewProduct = async () => {
    const { ProductsStore } = this.props;
    const { newProduct } = ProductsStore;
    const { otherDetails } = this.state;
    const detailString =
      otherDetails
        .filter(({ characteristic: c, value: v }) => c.trim() !== '' && v.trim() !== '')
        .map(({ characteristic: c, value: v }) => `${c}=${v}`)
        .join(',');
    newProduct.setValue('other_details', detailString);
    await ProductsStore.addProduct();
  }

  render() {
    const {
      openSansBold, contentStyle, container, openSansSemiBold, flatButton
    } = styles;

    const {
      UserStore, ProductsStore
    } = this.props;

    const {
      breederProfile
    } = UserStore;

    const { 
      selectedProduct
    } = ProductsStore;

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
                Edit Product
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
                    <Input value={selectedProduct.name} placeholder='Name' style={[openSansSemiBold]} onChangeText={value => selectedProduct.setValue('name', value)} />
                  </Item>
                  <Item >
                    <Picker
                      mode='dropdown'
                      iosIcon={<Icon name="ios-arrow-down-outline" />}
                      placeholder='Choose Type'
                      placeholderStyle={[openSansSemiBold]}
                      selectedValue={selectedProduct.type.toLowerCase()}
                      onValueChange={value => selectedProduct.setValue('type', value)}
                      textStyle={[openSansSemiBold]}
                      itemTextStyle={[openSansSemiBold]}
                    >
                      <Picker.Item label="Boar" value="boar" />
                      <Picker.Item label="Sow" value="sow" />
                      <Picker.Item label="Gilt" value="gilt" />
                      <Picker.Item label="Semen" value="semen" />
                    </Picker>
                  </Item>
                  <Item >
                    <Picker
                      mode='dropdown'
                      placeholder='Choose Farm From'
                      placeholderStyle={[openSansSemiBold]}
                      selectedValue={selectedProduct.farm_from_id}
                      onValueChange={value => selectedProduct.setValue('farm_from_id', value)}
                    >
                      {breederProfile.farm_addresses.map(f => <Picker.Item label={f.name} value={f.id} key={f.id} />)}
                    </Picker>
                  </Item>
                  <Item>
                    <Input value={(selectedProduct.price && selectedProduct.price.toString()) || ''} placeholder='Price' keyboardType='numeric' style={[openSansSemiBold]} onChangeText={value => selectedProduct.setValue('price', value)} />
                  </Item>
                </Form>
              </View>
            </View>
            <View style={{ marginTop: 20 }}>
              <View style={[container, { marginBottom: 20 }]}>
                <Text style={[openSansBold, { color: '#000000', fontSize: 22 }]}>Breed Information</Text>
              </View>
              <View>
                <Grid style={{ paddingHorizontal: 20 }}>
                  <Col style={[container]}>
                    <View style={{ flexDirection: 'row' }}>
                      <Radio
                        selectedColor='#00af66'
                        selected={this.state.breed === 'Pure'}
                        onPress={() => this.toggleRadio('Pure')}
                      />
                      <Text style={[openSansBold, { color: '#000000', fontSize: 16, marginLeft: 5 }]}>Pure Breed</Text>
                    </View>
                  </Col>
                  <Col style={[container]}>
                    <View style={{ flexDirection: 'row' }}>
                      <Radio
                        selectedColor='#00af66'
                        selected={this.state.breed === 'Cross'}
                        onPress={() => this.toggleRadio('Cross')}
                      />
                      <Text style={[openSansBold, { color: '#000000', fontSize: 16, marginLeft: 5 }]}>Cross Breed</Text>
                    </View>
                  </Col>
                </Grid>
                <Form>
                  {
                    this.state.breed === 'Pure' && <Item>
                      <Input value={selectedProduct.breed} placeholder="Breed" style={[openSansSemiBold]} onChangeText={value => selectedProduct.setValue('breed', value)} />
                    </Item>
                  }
                  {
                    this.state.breed === 'Cross' && <React.Fragment>
                      <Item>
                        <Input value={selectedProduct.fatherBreed} placeholder="Father's Breed" style={[openSansSemiBold]} onChangeText={value => selectedProduct.setValue('fatherBreed', value.trim())} />
                      </Item>
                      <Item>
                        <Input value={selectedProduct.motherBreed} placeholder="Mother's Breed" style={[openSansSemiBold]} onChangeText={value => selectedProduct.setValue('motherBreed', value.trim())} />
                      </Item>
                    </React.Fragment>
                  }
                  <Item>
                    <DatePicker
                      defaultDate={new Date(selectedProduct.birthdate)}
                      locale={"ph"}
                      androidMode={"default"}
                      placeHolderText={selectedProduct.birthdate}
                      formatChosenDate={date => { return moment(date).format('LL'); }}
                      textStyle={[openSansSemiBold, { color: "#000000", paddingLeft: 5 }]}
                      placeHolderTextStyle={[openSansSemiBold, { color: "#000000", paddingLeft: 5 }]}
                      onDateChange={value => selectedProduct.setValue('birthdate', value)}
                    />
                  </Item>
                  <Item>
                    <Input value={selectedProduct.adg.toString()} keyboardType='numeric' placeholder='Average Daily Gain (grams)' style={[openSansSemiBold]} onChangeText={value => selectedProduct.setValue('adg', Number.parseFloat(value))} />
                  </Item>
                  <Item>
                    <Input value={selectedProduct.fcr.toString()} keyboardType='numeric' placeholder='Feed Conversion Ratio' style={[openSansSemiBold]} onChangeText={value => selectedProduct.setValue('fcr', Number.parseFloat(value))} />
                  </Item>
                  <Item>
                    <Input value={selectedProduct.backfat_thickness.toString()} keyboardType='numeric' placeholder='Backfat Thickness (mm)' style={[openSansSemiBold]} onChangeText={value => selectedProduct.setValue('backfat_thickness', Number.parseFloat(value))} />
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
                      this.state.otherDetails.map((o, i) => (
                        <Row key={i}>
                          <Col>
                            <Form>
                              <Item>
                                <Input placeholder='Characteristic' style={[openSansSemiBold]} onChangeText={value => this.handleTextChange(i, 'characteristic', value)} />
                              </Item>
                            </Form>
                          </Col>
                          <Col>
                            <Form>
                              <Item>
                                <Input placeholder='Value' style={[openSansSemiBold]} onChangeText={value => this.handleTextChange(i, 'value', value)} />
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

export default EditProduct;