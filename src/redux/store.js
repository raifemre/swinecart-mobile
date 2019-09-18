import { init } from '@rematch/core';
import selectPlugin from '@rematch/select';
import createLoadingPlugin from '@rematch/loading';

import * as models from './models';

const loadingPlugin = createLoadingPlugin({});

const store = init({
  models,
  plugins: [
    loadingPlugin,
    // selectPlugin(),
  ]
});

export default store;