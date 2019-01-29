import React from 'react';
import SegmentedControlTab from 'react-native-segmented-control-tab';

function Segments({ selectedIndex, onTabPress, values }) {
  return (
    <SegmentedControlTab
      values={values}
      selectedIndex={selectedIndex}
      onTabPress={onTabPress}
      borderRadius={0}
      tabsContainerStyle={{ height: 48, backgroundColor: '#F2F2F2' }}
      tabStyle={{ backgroundColor: '#F2F2F2', borderWidth: 0, borderColor: 'transparent' }}
      activeTabStyle={{ backgroundColor: 'white', marginTop: 2 }}
      tabTextStyle={{ color: '#444444', fontFamily: 'OpenSans-Bold', fontSize: 14 }}
      activeTabTextStyle={{ color: '#888888' }}
    />
  )
}

export default Segments;