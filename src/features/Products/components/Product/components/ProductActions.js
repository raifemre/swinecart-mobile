import React, { memo, Fragment } from 'react';
import { withStyles } from 'react-native-ui-kitten/theme';
import { Block, IconButton } from '../../../../../shared/components'

import { textStyles, sizes } from '../../../../../constants/theme';

function ProductActions(props) {

  const { 
    themedStyle, status, onPressToggle, onPressDelete, onPressEdit
  } = props;

  return (
    <Block flex='disabled' row right center space='between' style={themedStyle.actionsContainer}>
      {
        status === 'requested'
          ? null
          : <Fragment>
            <IconButton
              onPress={onPressToggle}
              iconSize={28}
              iconName='eye'
            />
            <IconButton
              onPress={onPressEdit}
              iconSize={28}
              iconName='edit'
              style={{ marginLeft: sizes.margin / 2 }}
            />
            <IconButton
              onPress={onPressDelete}
              iconSize={28}
              iconName='trash-2'
            />
          </Fragment>
      }
    </Block>
  );
}

export default withStyles(memo(ProductActions, () => true), () => ({
  actionsContainer: {
    padding: sizes.padding / 2,
  },
  buttonText: {
    ...textStyles.button
  },
  toggleDisplayButton: {
    borderWidth: 0,
    marginBottom: sizes.margin / 2,
  },
  button: {
    borderWidth: 0,
  },
}));