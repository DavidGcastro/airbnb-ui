import React from 'react';
import { View, Text } from 'react-native';
import Search from '../components/Search';
import styles from '../styles/main';
import Title from '../components/Title';
import Slide from '../components/Slide';

const Main = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Search />
        <Title />
        <Slide />
      </View>
    </View>
  );
};

export default Main;
