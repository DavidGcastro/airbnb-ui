import React from 'react';
import { SafeAreaView } from 'react-native';
import { Font, AppLoading } from 'expo';
import { createStackNavigator } from 'react-navigation';
// Screens
import Main from './screens/Main';

const RootNavigator = createStackNavigator(
  {
    Main: { screen: Main }
  },
  {
    headerMode: 'none'
  }
);

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false
    };
  }
  async componentDidMount() {
    await Font.loadAsync({
      montserrat: require('./assets/fonts/Montserrat/Montserrat-Bold.ttf')
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    if (this.state.fontLoaded) {
      return <RootNavigator />;
    }
    return <AppLoading />;
  }
}
