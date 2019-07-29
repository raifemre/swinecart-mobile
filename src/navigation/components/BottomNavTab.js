
import React, { memo } from 'react';
import { BottomNavigationTab, } from 'react-native-ui-kitten';

import { Icon } from '../../shared/components';

import { colors, textStyles } from '../../constants/theme';

function BottomNavTab(props) {

  const { title, iconName, selected, ...restProps } = props;

  const renderIcon = () => (
    <Icon
      name={iconName} 
      color={ selected ? colors.primary : colors.gray4 }
    />
  );
    
  const titleStyle = [
    textStyles.subtitle,
    { 
      fontSize: 12,
      color: selected ? colors.primary : colors.gray4,
    }
  ];

  return (
    <BottomNavigationTab 
      title={title}
      titleStyle={titleStyle}
      icon={renderIcon} 
      {...restProps}
    />
  );

};

export default memo(BottomNavTab);