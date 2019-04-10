import React, { Component } from 'react';
import { Container, View, Left, Right, Spinner, Content } from 'native-base';
import { observer, inject } from 'mobx-react';
import { NavigationEvents } from 'react-navigation';

import HeaderWrapper from '../../../shared/HeaderWrapper';
import BodyWrapper from '../../../shared/BodyWrapper';
import IconButton from '../../../shared/IconButton';
import BackButton from '../../../shared/BackButton';

import { Navigation } from '../../../services';

import FarmInfo from '../components/FarmInfo';

@inject('ProductsStore', 'FarmStore')
@observer
class FarmDetails extends Component {

  deleteFarm = () => {
    alert('Delete Farm');
  }

  editFarm = () => {
    alert('Edit Farm');
  }

  getFarmDetails = () => {
    const { navigation, FarmStore } = this.props;
    const farm = navigation.getParam('farm');
    FarmStore.getFarm(farm.id);
  }

  resetFarm = () => {
    this.props.FarmStore.resetData('farm');
  }

  render() {

    const { FarmStore } = this.props;

    return (
      <React.Fragment>
        <NavigationEvents
          onDidFocus={this.getFarmDetails}
          onWillBlur={this.resetFarm}
        />
        <Container>
          <HeaderWrapper>
            <Left style={{ flex: 1 }}>
              <BackButton />
            </Left>
            <BodyWrapper
              title='Farm Information'
            />
            <Right style={{ flex: 1 }}>
              <View style={{ flexDirection: 'row', }}>
                <IconButton marginLeft={0} marginRight={5}
                  size={26}
                  color='#ffffff'
                  name='edit'
                  type='MaterialIcons'
                  onPress={this.editFarm}
                />
                <IconButton marginLeft={5} marginRight={0}
                  size={26}
                  color='#ffffff'
                  name='delete'
                  type='MaterialIcons'
                  onPress={this.deleteFarm}
                />
              </View>
            </Right>
          </HeaderWrapper>
          <Content contentContainerStyle={{ flex: 1 }}>
            {
              !FarmStore.farm &&
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                <Spinner color='#00695C' />
              </View>
            } 
            {
              FarmStore.farm && 
              <FarmInfo farm={FarmStore.farm} />
            } 
          </Content>
        </Container>
      </React.Fragment>
    );
  }

}



export default FarmDetails;