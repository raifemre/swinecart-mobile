import React from 'react';
import SegmentedControlTab from 'react-native-segmented-control-tab';

function Segments({ selectedIndex, onTabPress, values }) {
  return (
    <SegmentedControlTab
      values={values}
      selectedIndex={selectedIndex}
      onTabPress={onTabPress}
      borderRadius={5}
      tabsContainerStyle={{ height: 40, backgroundColor: 'transparent', marginTop: 5, marginHorizontal: 5,}}
      tabStyle={{ backgroundColor: '#ffffff', borderWidth: 2, borderColor: '#00695C' }}
      tabTextStyle={{ color: '#00695C', fontFamily: 'OpenSans-Bold', fontSize: 12 }}
      activeTabStyle={{ backgroundColor: '#00695C', marginTop: 0 }}
      activeTabTextStyle={{ color: '#ffffff' }}
    />
  )
}

export default Segments;