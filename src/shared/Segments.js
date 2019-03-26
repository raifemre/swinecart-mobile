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
      tabStyle={{ backgroundColor: '#ffffff', borderWidth: 2, borderColor: 'transparent' }}
      tabTextStyle={{ color: '#00695C', fontFamily: 'OpenSans-Bold', fontSize: 12 }}
      activeTabStyle={{ backgroundColor: '#00695C', marginTop: 0 }}
      activeTabTextStyle={{ color: '#ffffff' }}
    />
  )
}

export default Segments;