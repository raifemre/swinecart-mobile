import React, { Fragment, memo, useState, useEffect } from 'react';
import { Avatar } from 'react-native-ui-kitten';
import { useSelector, useDispatch } from 'react-redux';

import { InfoRow, Block, ContainerView, LoadingView } from '../../../shared/components';

import { colors } from '../../../constants/theme';

import { getBreederProfile } from '../../../redux/actions/breederProfile';

function OfficeInfo(props) {

  const profile = useSelector(state => state.breederProfile.profile);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBreederProfile());
  }, []);

  return (
    <Fragment>
      {
        profile && <ContainerView>
          <Block marginBottom>
            <Block center middle paddingTop flex='disabled' style={{ backgroundColor: colors.white1 }}>
              <Avatar
                shape='rounded'
                source={{ uri: `http://swinecart.pcaarrd.dost.gov.ph${profile.img_path}` }}
                style={{ width: 128, height: 128 }}
              />
            </Block>
          </Block>
          <Block marginTop marginBottom style={{ backgroundColor: '#ffffff' }}>
            <InfoRow label='Address Line 1' data={profile.officeAddress_addressLine1} />
            <InfoRow label='Address Line 2' data={profile.officeAddress_addressLine2} />
            <InfoRow label='Province' data={profile.officeAddress_province} />
            <InfoRow label='Postal / Zip Code' data={profile.officeAddress_zipCode}/>
            <InfoRow label='Landline' data={profile.office_landline}/>
            <InfoRow label='Mobile' data={profile.office_mobile}/>
          </Block>
          <Block marginTop marginBottom style={{ backgroundColor: '#ffffff' }}>
            <InfoRow label='Name' data={profile.contactPerson_name}/>
            <InfoRow label='Mobile' data={profile.contactPerson_mobile}/>
          </Block>
          <Block marginTop marginBottom style={{ backgroundColor: '#ffffff' }}>
            <InfoRow label='Website' data={profile.website}/>
            <InfoRow label='Produce' data={profile.produce}/>
          </Block>
        </ContainerView>
      }
      {
        !profile && <LoadingView />
      }
    </Fragment>
  );

}

export default memo(OfficeInfo);
