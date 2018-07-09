import React from 'react';
import { View } from 'react-native';
import Search from '../components/Search';
import styles from '../styles/main';
import Title from '../components/Title';
import Slide from '../components/Slide';
import data from '../dummyData';
import Swiper from 'react-native-swiper';
import Slider from './Slider';

const Main = () => {
  return (
    <View style={styles.wrapper}>
      <Title />
      <Slider
        style={{
          flex: 1,
          overflow: 'visible',
          borderWidth: 1,
          borderColor: 'red'
        }}
      />;
    </View>
  );
};

export default Main;
