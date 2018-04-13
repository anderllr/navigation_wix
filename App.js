import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import AuthScreen from './src/screens/Auth/Auth';
import FirstTabScreen from './src/screens/FirstTab/FirstTab';
import SecondTabScreen from './src/screens/SecondTab/SecondTab';

//Register Screens
Navigation.registerComponent("AuthScreen", () => AuthScreen);
Navigation.registerComponent("FirstTabScreen", () => FirstTabScreen);
Navigation.registerComponent("SecondTabScreen", () => SecondTabScreen);

//Start a App
Navigation.startSingleScreenApp({
  screen: {
    screen: "AuthScreen",
    title: "Login"
  }
});