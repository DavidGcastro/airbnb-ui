import React from 'react';
import { View, Image } from 'react-native';
import styles from '../styles/slider';
import { Badge, Text } from 'native-base';

import Swiper from 'react-native-swiper';

const Slider = props => (
  <View>
    <View style={{ position: 'relative' }}>
      <Image
        style={styles.image}
        source={require('../assets/images/newyork-apt.jpg')}
      />
    </View>
    <Text
      style={{
        position: 'absolute',
        color: 'white',
        borderWidth: 0,
        fontSize: 15,
        top: 20,
        left: 20,
        borderRadius: 5,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 5,
        paddingTop: 5,
        overflow: 'hidden',
        backgroundColor: '#FF5A5F',
        letterSpacing: 0.5
      }}>
      NIGHTLIFE
    </Text>
    <Badge
      success
      style={{
        position: 'absolute',
        top: 40,
        left: 120,
        backgroundColor: '#FF5A5F',
        borderColor: 'white',
        borderWidth: 1
      }}>
      <Text>2</Text>
    </Badge>
  </View>
);

export default Slider;
