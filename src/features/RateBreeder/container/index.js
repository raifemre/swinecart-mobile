import React, { Component } from 'react';
import { Container, View, Left, Right, Content } from 'native-base';
import { observer, inject } from 'mobx-react';
import { NavigationEvents } from 'react-navigation';

import HeaderWrapper from '../../../shared/HeaderWrapper';
import BackButton from '../../../shared/BackButton';
import BodyWrapper from '../../../shared/BodyWrapper';
import SpinnerWithOverlay from '../../../shared/SpinnerWithOverlay';

import RateForm from '../components/RateForm';


@inject('SwineCartStore', 'RateBreederForm')
@observer
class RateBreeder extends Component {

  onWillBlur = () => {
    this.props.RateBreederForm.resetForm();
  }


  render() {

    const { navigation, RateBreederForm } = this.props;
    const breeder = navigation.getParam('breeder');
    const item = navigation.getParam('item');
    const { breeder_name } = breeder;

    return (
      <React.Fragment>
        <NavigationEvents
          onWillBlur={this.onWillBlur}
        />
        <SpinnerWithOverlay visible={RateBreederForm.loading} />
        <Container>
          <HeaderWrapper>
            <Left style={[{ flex: 1 }]}>
              <BackButton icon='close' />
            </Left>
            <BodyWrapper title={`Rate ${breeder_name}`} />
            <Right />
          </HeaderWrapper>
          <Content>
            <View style={{ padding: 5, flex: 1, justifyContent: 'center', alignContent: 'center', }}>
              <RateForm breeder={breeder} item={item} />
            </View>
          </Content>
        </Container>
      </React.Fragment>
    );
  }

}

export default RateBreeder;