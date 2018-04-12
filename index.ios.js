import { Navigation } from 'react-native-navigation';
import App from './App';
Navigation.registerComponent('navigationwix', () => App);
Navigation.startSingleScreenApp({
    screen: {
        screen: 'simple'
    }
});