import React, { Fragment, memo } from 'react';

import {
  Avatar
} from 'react-native-ui-kitten';

import {
  InfoRow, Block
} from '../../../shared/components';

import { urls } from '../../../constants/randomImage';

function OfficeInfo(props) {

  return (
    <Fragment>
      <Block marginTop marginBottom>
        <Block center middle paddingTop flex='disabled'>
          <Avatar
            shape='rounded'
            source={{ uri: urls[0] }}
            style={{ width: 128, height: 128 }}
          />
        </Block>
      </Block>
      <Block marginTop marginBottom style={{ backgroundColor: '#ffffff' }}>
        <InfoRow label='Breeder Name' data=''/>
      </Block>
      <Block marginTop marginBottom style={{ backgroundColor: '#ffffff' }}>
        <InfoRow label='Address Line 1' data='' />
        <InfoRow label='Address Line 2' data='' />
        <InfoRow label='Province' data='' />
        <InfoRow label='Postal / Zip Code' />
        <InfoRow label='Landline' />
        <InfoRow label='Mobile' />
      </Block>
      <Block marginTop marginBottom style={{ backgroundColor: '#ffffff' }}>
        <InfoRow label='Name' />
        <InfoRow label='Mobile' />
      </Block>
      <Block marginTop marginBottom style={{ backgroundColor: '#ffffff' }}>
        <InfoRow label='Website' />
        <InfoRow label='Produce' />
      </Block>
    </Fragment>
  );

}

export default memo(OfficeInfo);
