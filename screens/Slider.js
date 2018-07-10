import data from '../dummyData';
import React from 'react';
import { Scroll, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');
import Swiper from 'react-native-swiper';
import Slide from '../components/Slide';
const Slider = () => {
  return (
    <Swiper style={{ overflow: 'visible' }} width={width - 30}>
      {data.map((data, i) => <Slide data={data} key={i} />)}
    </Swiper>
  );
};

export default Slider;
