import React, { Fragment, memo } from 'react';

import {
  InfoRow, Block
} from '../../../shared/components';

function OfficeInfo(props) {

  return (
    <Fragment>
      <Block marginTop style={{ backgroundColor: '#ffffff' }}>
        <InfoRow title='Address Line 1' data='' />
        <InfoRow title='Address Line 2' data='' />
        <InfoRow title='Province' data='' />
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
    </Fragment>
  );

}

export default memo(OfficeInfo);
