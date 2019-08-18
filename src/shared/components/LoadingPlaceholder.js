import React, { Fragment, memo } from 'react';
import LoadingView from './LoadingView';

function LoadingPlaceholder({ data, children }) {
  return (
    <Fragment>
      {
        data && children()
      }
      {
        !data && <LoadingView />
      }
    </Fragment>
  );
}

export default memo(LoadingPlaceholder); 