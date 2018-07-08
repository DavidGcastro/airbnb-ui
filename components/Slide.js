import React, { Component } from 'react';
import { ImageBackground, Text, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const Slider = () => {
  return (
    <ImageBackground
      source={require('../assets/images/newyork-apt.jpg')}
      style={{ width: '100%', height: height - 200 }}>
      <Text>text</Text>
    </ImageBackground>
  );
};

export default Slider;