import React, { memo } from 'react';
import { Text } from 'shared/components';

function LabelText() {
  return (
    <Text subtitle size={16} color='gray5'>
      Status:
    </Text>
  );
}

export default memo(LabelText, () => true);