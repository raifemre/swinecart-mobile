import React, { memo, useMemo } from 'react';
import { Text } from 'react-native-ui-kitten';
import { withStyles } from 'react-native-ui-kitten/theme';
import Block from '../Block';
import { textStyles, colors, sizes } from '../../../constants/theme';

import { 
  TextInput, Label, ErrorMessage
} from './components';


function Input(props) {

  const { 
    themedStyle, onChange, name, values, touched,
    errors, label, ...restProps 
  } = props;

  const isError = useMemo(() => errors[name] && touched[name], [errors[name], touched[name]]);
  
  const textInputContainerStyle = useMemo(() => [
    themedStyle.textInputContainer,
    {
      borderColor: isError ? colors.danger : colors.primary
    }
  ], [ isError ]);

  return (
    <Block flex={'disabled'} style={themedStyle.container}>
      <Label text={label} />
      <Block flex={'disabled'} middle style={textInputContainerStyle}>
        <TextInput
          value={values[name]}
          name={name}
          onChange={onChange}
          {...restProps}
        />
      </Block>
      {isError && <ErrorMessage text={errors[name]} /> }
    </Block>
  );
}

export default withStyles(memo(Input), () => ({
  container: {
    marginVertical: sizes.margin / 2
  },
  label: {
    ...textStyles.caption2
  },
  textInputContainer: {
    backgroundColor: colors.gray2,
    borderWidth: 2,
    borderRadius: 5,
    minHeight: 56,
    paddingHorizontal: sizes.padding / 2,
  },
}));