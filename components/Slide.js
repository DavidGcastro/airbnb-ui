import React from 'react';
import { ImageBackground, View } from 'react-native';
import { Badge, Text } from 'native-base';
import { Icon, Divider } from 'react-native-elements';
import styles from '../styles/slider';

const Slide = props => {
  return (
    <View>
      <ImageBackground
        source={require('../assets/images/newyork-apt.jpg')}
        style={styles.image}>
        <View style={{ flex: 1, justifyContent: 'space-between' }}>
          <View style={styles.topContainer}>
            <View
              style={{ flex: 1, flexDirection: 'row', alignItems: 'baseline' }}>
              <Text style={styles.slideLabel}>NIGHTWATCH</Text>
              <Badge style={styles.badge}>
                <Text style={{ color: 'white' }}>2</Text>
              </Badge>
            </View>
            <View
              style={{
                flexDirection: 'row',
                left: -40
              }}>
              <Text style={styles.price}>$ 10</Text>
            </View>
          </View>
          {/*BOTTOM*/}
          <View style={{ padding: 15, justifyContent: 'space-between' }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                marginBottom: 30
              }}>
              <Icon type="feather" name="upload" color="white" />
              <Icon type="feather" name="heart" color="white" />
            </View>
            <Text
              style={{
                fontFamily: 'montserrat',
                color: 'white',
                fontSize: 20,
                marginBottom: 20
              }}>
              Checkout out this.
            </Text>
            <Divider style={{ backgroundColor: 'white' }} />
            <View
              style={{
                marginTop: 20,
                flexDirection: 'row',
                justifyContent: 'space-between'
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'flex-end'
                }}>
                <Icon
                  color="white"
                  type="MaterialIcons"
                  name="hourglass-empty"
                />
                <Text style={{ color: 'white' }}>10:00</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                <Icon
                  color="white"
                  type="MaterialIcons"
                  name="chat-bubble-outline"
                />
                <Text style={{ color: 'white' }}>English</Text>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Slide;
