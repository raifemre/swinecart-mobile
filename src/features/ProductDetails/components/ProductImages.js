import React, { memo } from 'react';
import { Image } from 'react-native';
import { withStyles } from 'react-native-ui-kitten/theme';
import { Text, List, ListItem } from 'react-native-ui-kitten';

import { ModalService } from '../../../services';

import { sizes, textStyles, colors } from '../../../constants/theme';

import {
  Block
} from '../../../shared/components';

function ProductImages({ themedStyle, productImages }) {

  const onItemPress = index => {
    ModalService.showModal('ImageLightBox', { url: productImages[index] });
  };

  const renderItem = ({ item }) => {
    return (
      <ListItem
        style={themedStyle.itemContainer} 
        activeOpacity={0.75} 
        onPress={onItemPress}
      >
        <Image
          style={themedStyle.image}
          source={{ uri: item }}
        />
      </ListItem>
    );
  };

  return (
    <Block flex='disabled' marginBottom marginTop>
      <Text style={themedStyle.header}>Images</Text>
      <List
        contentContainerStyle={themedStyle.listContainer}
        horizontal={true}
        showsHorizontalScrollIndicator={true}
        data={productImages}
        renderItem={renderItem}
      />
    </Block>
  );
}


export default withStyles(memo(ProductImages, () => true), () => ({
  header: {
    ...textStyles.headline,
    fontSize: 20,
    lineHeight: 24,
    color: colors.primary,
    marginBottom: sizes.margin / 2,
  },
  content: {
    ...textStyles.caption,
    fontSize: 16,
    lineHeight: 19.2,
  },
  image: {
    width: 150,
    height: 120,
  },
  itemContainer: {
    paddingHorizontal: 0,
    paddingVertical: 0,
    marginHorizontal: sizes.padding,
    overflow: 'hidden',
    borderColor: colors.gray2,
    borderWidth: 1,
    borderRadius: 12
  },
  listContainer: {
    backgroundColor: '#ffffff',
  }
}));