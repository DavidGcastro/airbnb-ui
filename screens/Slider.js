import data from '../dummyData';
import React from 'react';
import { Scroll } from 'react-native';
import Swiper from 'react-native-swiper';
import Slide from '../components/Slide';
const Slider = () => {
  return (
    <Swiper style={{ overflow: 'visible' }} width={300}>
      {data.map((data, i) => <Slide key={i} />)}
    </Swiper>
  );
};

export default Slider;

