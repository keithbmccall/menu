// prettier-ignore
import { AppRegistry } from 'react-native';
// eslint-disable-next-line import/extensions
import { name } from './app.json';
// eslint-disable-next-line import/no-unresolved
import './config';
// eslint-disable-next-line import/no-unresolved
import Root from './src/root';

AppRegistry.registerComponent(name, () => Root);
