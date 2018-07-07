import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import styles from '../styles/slider';
import Swiper from 'react-native-swiper';

const Slider = props => (
  <View
    style={{
      alignContent: 'center',
      alignItems: 'center'
    }}>
    <Image
      style={styles.image}
      source={require('../assets/images/newyork-apt.jpg')}
    />
    <Text> NightLife </Text>
  </View>
);

export default Slider;
