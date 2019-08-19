import React, { Fragment, memo, useState, useEffect } from 'react';
import { API_URL } from 'react-native-dotenv';
import {
  Avatar
} from 'react-native-ui-kitten';

import {
  InfoRow, Block, ContainerView, LoadingView
} from '../../../shared/components';

import { urls } from '../../../constants/randomImage';

import { BreederProfileService } from '../../../services';

function OfficeInfo(props) {

  const [ breederProfile, setBreederProfile ] = useState(null);

  useEffect(() => {
    BreederProfileService.getProfile()
      .then(response => {
        if (response && response.data && response.data.profile) {
          setBreederProfile(response.data.profile);
        }
      });
  }, []);

  return (
    <Fragment>
      {
        breederProfile && <ContainerView>
          <Block marginTop marginBottom>
            <Block center middle paddingTop flex='disabled'>
              <Avatar
                shape='rounded'
                source={{ uri: `http://swinecart.pcaarrd.dost.gov.ph${breederProfile.img_path}` }}
                style={{ width: 128, height: 128 }}
              />
            </Block>
          </Block>
          <Block marginTop marginBottom style={{ backgroundColor: '#ffffff' }}>
            <InfoRow label='Address Line 1' data={breederProfile.officeAddress_addressLine1} />
            <InfoRow label='Address Line 2' data={breederProfile.officeAddress_addressLine2} />
            <InfoRow label='Province' data={breederProfile.officeAddress_province} />
            <InfoRow label='Postal / Zip Code' data={breederProfile.officeAddress_zipCode}/>
            <InfoRow label='Landline' data={breederProfile.office_landline}/>
            <InfoRow label='Mobile' data={breederProfile.office_mobile}/>
          </Block>
          <Block marginTop marginBottom style={{ backgroundColor: '#ffffff' }}>
            <InfoRow label='Name' data={breederProfile.contactPerson_name}/>
            <InfoRow label='Mobile' data={breederProfile.contactPerson_mobile}/>
          </Block>
          <Block marginTop marginBottom style={{ backgroundColor: '#ffffff' }}>
            <InfoRow label='Website' data={breederProfile.website}/>
            <InfoRow label='Produce' data={breederProfile.produce}/>
          </Block>
        </ContainerView>
      }
      {
        !breederProfile && <LoadingView />
      }
    </Fragment>
  );

}

export default memo(OfficeInfo);
