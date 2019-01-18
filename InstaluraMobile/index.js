/** @format */

import {AppRegistry} from 'react-native';
import Feed from './src/components/Feed';
import {name as appName} from './app.json';
import Login from "./src/screens/Login";

AppRegistry.registerComponent(appName, () => Login);
