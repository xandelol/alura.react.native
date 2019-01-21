/** @format */

import {Navigation} from 'react-native-navigation';
import Feed from './src/components/Feed';
import Login from "./src/screens/Login";

Navigation.registerComponent('navigation.playground.Login', () => Login);
Navigation.registerComponent('navigation.playground.Feed', () => Feed);

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            component:{
                name:'navigation.playground.Login'
            }
        }
    });
});


