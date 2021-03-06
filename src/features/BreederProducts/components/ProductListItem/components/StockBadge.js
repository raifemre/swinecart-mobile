import React, { memo } from 'react';

import Badge from '../../Badge';

function StockBadge({ type, isUnique, quantity }) {

  if (type === 'semen') {
    return null;
  }
  else {
    if (isUnique) {
      return (
        <Badge text='Unique' backgroundColor='color-warning-700' />
      );
    }
    else {
      if (quantity <= 0) {
        return (
          <Badge text='Out of Stock' backgroundColor='color-danger-600' />
        );
      }
      else {
        return (
          <Badge text={`Quantity: ${quantity}`} backgroundColor='color-info-600' />
        );
      }
    }
  }
}

export default memo(StockBadge);