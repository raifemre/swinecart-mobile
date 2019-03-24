import React, { Component } from 'react';
import { Container, View, Left, Right } from 'native-base';
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

  componentDidMount() {
    this.props.FarmStore.getFarms();
  }

  deleteFarm = () => {
    alert('Delete Farm');
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

    const { navigation, FarmStore } = this.props;
    const farm = navigation.getParam('farm');

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
              <IconButton marginLeft={0} marginRight={0}
                size={26}
                color='#ffffff'
                name='delete'
                type='MaterialIcons'
                onPress={this.deleteFarm}
              />
            </Right>
          </HeaderWrapper>
          <View style={{ flex: 1 }}>
            {
              FarmStore.farm && 
              <FarmInfo farm={FarmStore.farm} />
            } 
          </View>
        </Container>
      </React.Fragment>
    );
  }

}



export default FarmDetails;