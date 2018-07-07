import React from 'react';
import { View } from 'react-native';
import Search from '../components/Search';
import styles from '../styles/main';
import { Text, h1 } from 'react-native-elements';

const Main = () => {
  return (
    <View style={styles.container}>
      <Search />
      <Text h3>Top Trending</Text>
    </View>
  );
};

export default Main;
