import React, { Component } from 'react';

import {
  Container, View, Left, Right, Textarea, Form, Content
} from 'native-base';

import {
  observer, inject
} from 'mobx-react';
import { SimpleStepper } from 'react-native-simple-stepper';

import HeaderWrapper from '../../../shared/HeaderWrapper';
import BackButton from '../../../shared/BackButton';
import BodyWrapper from '../../../shared/BodyWrapper';
import TextWrapper from '../../../shared/TextWrapper';
import PrimaryButton from '../../../shared/PrimaryButton';
import Navigation from '../../../services/navigation';
import { toJS } from 'mobx';

@inject('SwineCartStore')
@observer
class RequestItem extends Component {

  state = {
    specialRequest: '',
    quantity: 2
  }

  onChangeText = text => {
    this.setState({
      specialRequest: text
    })
  }

  valueChanged = quantity => {
    this.setState({ quantity });
  }

  request = async () => {
    const { navigation, SwineCartStore } = this.props;
    const item = navigation.getParam('item');
    const { product_name, product_type } = item;
    const { specialRequest, quantity } = this.state;
    const data = {
      specialRequest,
      requestQuantity: product_type === 'Semen'? quantity : 1
    }

    await SwineCartStore.requestItem(item.id, data);
    Navigation.back();
  }

  render() {

    const { navigation } = this.props;
    const item = navigation.getParam('item');
    const { product_name, product_type } = item;

    return (
      <React.Fragment>
        <Container>
          <HeaderWrapper>
            <Left style={[{ flex: 1 }]}>
              <BackButton />
            </Left>
            <BodyWrapper title='Request Item' />
            <Right />
          </HeaderWrapper>
          <Content>
            <View style={{ padding: 8 }}>
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <TextWrapper size={18} text={`Are you sure you want to request ${product_name}?`} />
                <TextWrapper size={12} text={'Once requested, this product cannot be removed from the Swine Cart unless it will be reserved to another customer.'} />
              </View>
              {product_type === 'Semen' && <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <TextWrapper color={'#8E8E8E'} size={18} text={`Quantity ${this.state.quantity}`} />
                <SimpleStepper initialValue={2} stepValue={2} maximumValue={10000} value={this.state.quantity} valueChanged={this.valueChanged} />
              </View>}
              <Form>
                <Textarea value={this.state.specialRequest} onChangeText={this.onChangeText} rowSpan={5} bordered placeholder='Message / Special Request' />
              </Form>
              <PrimaryButton block onPress={this.request} style={{ marginTop: 16 }}>
                <TextWrapper
                  uppercase={false}
                  color='#ffffff'
                  text='Request Item'
                  font='OpenSans-Bold'
                  size={16}
                />
              </PrimaryButton>
            </View>
          </Content>
        </Container>
      </React.Fragment>
    );
  }

}

export default RequestItem;