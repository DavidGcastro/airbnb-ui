import React from 'react';
import { View, Text } from 'react-native';
import Search from '../components/Search';
import styles from '../styles/main';
import Title from '../components/Title';

const Main = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Search />
        <Title />
      </View>
    </View>
  );
};

export default Main;
