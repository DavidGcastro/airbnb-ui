import React from 'react';
import { View } from 'react-native';
import styles from '../styles/main';
import Title from '../components/Title';

import Slider from './Slider';

const Main = () => {
  return (
    <View>
      <View style={styles.wrapper}>
        <Title />
        <Slider />;
      </View>
    </View>
  );
};

export default Main;
