import React from 'react';
import { Text, View } from 'react-native';
import styles from '../styles/title';
import { Icon } from 'react-native-elements';

const Title = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.mainLabel}>Top Trending</Text>;
      </View>
      <View style={styles.textIconContainer}>
        <Text style={styles.viewAll}>View All</Text>
        <Icon type="MaterialIcons" name="navigate-next" />
      </View>
    </View>
  );
};

export default Title;
