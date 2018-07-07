import React, { Component } from 'react';
import { View, Image } from 'react-native';
import styles from '../styles/slider';
import Swiper from 'react-native-swiper';

const Slider = props => (
  <View style={styles.container}>
    <Image style={styles.image} source={props.uri} />
  </View>
);

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imagesSlider: [require('../assets/images/newyork-apt.jpg')]
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Swiper autoplay height={240}>
          {this.state.imagesSlider.map((item, i) => (
            <Slider uri={item} key={i} />
          ))}
        </Swiper>
      </View>
    );
  }
}
