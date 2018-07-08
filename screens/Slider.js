import data from '../dummyData';
import React, { Component } from 'react';
import { View } from 'react-native';
import Swiper from 'react-native-swiper';
import Slide from '../components/Slide';

export default class Slider extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Swiper autoplay>{data.map((data, i) => <Slide key={i} />)}</Swiper>;
  }
}
