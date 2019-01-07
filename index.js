import { AppRegistry } from 'react-native';
import applyDecoratedDescriptor from '@babel/runtime/helpers/esm/applyDecoratedDescriptor';
import initializerDefineProperty from '@babel/runtime/helpers/esm/initializerDefineProperty';

Object.assign(babelHelpers, {
  applyDecoratedDescriptor,
  initializerDefineProperty,
});

import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => require('./src').default);
