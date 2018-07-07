const { width } = Dimensions.get('window');
import React from 'react';
import { Dimensions } from 'react-native';
const styles = {
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  image: {
    flex: 1,
    width
  }
};

export default styles;
