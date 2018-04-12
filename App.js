import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import AuthScreen from './screens/Auth/Auth';
import SharePlaceScreen from './screens/SharePlace/SharePlace';
import FindPlaceScreen from './screens/FindPlace/FindPlace';

//Register Screens
Navigation.registerComponent("AuthScreen", () => AuthScreen);
Navigation.registerComponent("SharePlaceScreen", () => SharePlaceScreen);
Navigation.registerComponent("FindPlaceScreen", () => FindPlaceScreen);

//Start a App
Navigation.startSingleScreenApp({
  screen: {
    screen: "AuthScreen",
    title: "Login"
  }
});