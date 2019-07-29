
import React, { memo } from 'react';
import { BottomNavigation } from 'react-native-ui-kitten';

import { shadowStyles } from '../../constants/theme';

import BottomNavTab from '../../shared/components/navigation/BottomNavTab';

function BreederTabBar(props) {

  const onTabSelect = selectedIndex => {
    const { [selectedIndex]: selectedRoute } = props.navigation.state.routes;
    props.navigation.navigate(selectedRoute.routeName);
  };

  return (
    <BottomNavigation
      style={shadowStyles.shadow1}
      // appearance='noIndicator'
      selectedIndex={props.navigation.state.index}
      onSelect={onTabSelect}
    >
      <BottomNavTab title='Products' iconName='shopping-bag' />
      <BottomNavTab title='Orders' iconName='list' />
      <BottomNavTab title='Dashboard' iconName='grid' />
      <BottomNavTab title='Inbox' iconName='inbox' />
      <BottomNavTab title='Profile' iconName='user' />
    </BottomNavigation>
  );

};

export default memo(BreederTabBar);