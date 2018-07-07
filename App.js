import React from 'react';
import { Text, View } from 'react-native';
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
  render() {
    return <RootNavigator />;
  }
}
