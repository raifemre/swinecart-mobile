import React, { Fragment, PureComponent } from 'react';

import {
  HeaderBar, ContainerView, InfoRow, Block
} from '../../shared/components';

class Container extends PureComponent {

  state = {
    selectedIndex: 0
  } 

  onSelect = selectedIndex => {
    this.setState({
      selectedIndex
    });
  }


  render() {
    return (
      <Fragment>
        <HeaderBar title='Profile' />
        <ContainerView>
          <Block marginTop style={{ backgroundColor: '#ffffff' }}>
            <InfoRow title='Address Line 1' data='12313312312321321312332dasdsdsadadasdsadsad' />
            <InfoRow title='Address Line 2' data='12313312312321321312332dasdsdsadadasdsadsaddsadasddsaasdasdasdasdsadad' />
            <InfoRow title='Province' data='hello' />
            <InfoRow title='Postal / Zip Code' />
            <InfoRow title='Landline' />
            <InfoRow title='Mobile' />
          </Block>
          <Block marginTop2 style={{ backgroundColor: '#ffffff' }}>
            <InfoRow title='Name' />
            <InfoRow title='Mobile' />
          </Block>
          <Block marginTop2 marginBottom style={{ backgroundColor: '#ffffff' }}>
            <InfoRow title='Website' />
            <InfoRow title='Produce' />
          </Block>
        </ContainerView>
      </Fragment>
    );
  }

}


export default Container;