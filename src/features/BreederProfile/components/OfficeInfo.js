import React, { memo } from 'react';
import { useStoreState } from 'easy-peasy';
import { Avatar } from 'react-native-ui-kitten';

import { InfoRow, Block, ContainerView, LoadingView } from 'shared/components';

function OfficeInfo(props) {
  
  const isLoading = useStoreState(
    state => state.breederProfile.isLoading
  );

  const hasError = useStoreState(
    state => state.breederProfile.hasError
  );

  const data = useStoreState(
    state => state.breederProfile.data
  );

  
  if (isLoading) {
    return (
      <LoadingView />
    );
  }
  else if (hasError) {
    return (
      <LoadingView />
    );
  }

  else if (!isLoading && data) {
    return (
      <ContainerView>
        <Block marginBottom>
          <Block center middle paddingTop flex='disabled' backgroundColor='white1'>
            <Avatar
              shape='rounded'
              source={{ uri: `http://swinecart.pcaarrd.dost.gov.ph${data.logoUrl}` }}
              style={{ width: 128, height: 128 }}
            />
          </Block>
        </Block>
        <Block marginTop marginBottom backgroundColor='white1'>
          <InfoRow label='Address Line 1' data={data.addressLine1} />
          <InfoRow label='Address Line 2' data={data.addressLine2} />
          <InfoRow label='Province' data={data.province} />
          <InfoRow label='Postal / Zip Code' data={data.zipCode} />
          <InfoRow label='Landline' data={data.landline} />
          <InfoRow label='Mobile' data={data.mobile} />
        </Block>
        <Block marginTop marginBottom backgroundColor='white1'>
          <InfoRow label='Name' data={data.contactPersonName} />
          <InfoRow label='Mobile' data={data.contactPersonMobile} />
        </Block>
        <Block marginTop marginBottom backgroundColor='white1'>
          <InfoRow label='Website' data={data.website} />
          <InfoRow label='Produce' data={data.produce} />
        </Block>
      </ContainerView>
    );
  };

}

export default memo(OfficeInfo);
