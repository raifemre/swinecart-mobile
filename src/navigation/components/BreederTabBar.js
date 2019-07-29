
import React, { memo } from 'react';
import {
  BottomNavigation,
  BottomNavigationTab,
} from 'react-native-ui-kitten';

import { Icon } from '../../shared/components';

import { shadowStyles } from '../../constants/theme';

const MyProductIcon = () => <Icon name='list' color='#00695C' />;
const OrdersIcon = () => <Icon name='list' color='#00695C' />;
const DashboardIcon = () => <Icon name='list' color='#00695C' />;
const InboxIcon = () => <Icon name='list' color='#00695C' />;
const ProfileIcon = () => <Icon name='list' color='#00695C' />;


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
      <BottomNavigationTab title='My Products' icon={MyProductIcon} />
      <BottomNavigationTab title='Orders' icon={OrdersIcon} />
      <BottomNavigationTab title='Dashboard' icon={DashboardIcon} />
      <BottomNavigationTab title='Inbox' icon={InboxIcon} />
      <BottomNavigationTab title='Profile' icon={ProfileIcon} />
    </BottomNavigation>
  );

};

export default memo(BreederTabBar);