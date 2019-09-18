import { createStore, thunk } from 'easy-peasy';

import * as models from './models';

const store = createStore(models, {

});

// console.dir(store.getState());

export default store;