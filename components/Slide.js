import React from 'react';
import { ImageBackground, View, Image } from 'react-native';
import { Badge, Text } from 'native-base';
import { Icon, Divider } from 'react-native-elements';
import styles from '../styles/slider';

const Slide = props => {
  return (
    <View style={{ marginRight: 10, marginLeft: 10 }}>
      <Image source={{ uri: props.data.imageURL }} style={styles.image} />
      <View
        style={{
          justifyContent: 'space-between',
          alignContent: 'center',
          width: '100%',
          position: 'absolute'
        }}>
        <View style={styles.topContainer}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'baseline',
              position: 'relative'
            }}>
            <Text style={styles.slideLabel}>{props.data.category}</Text>
            <Badge style={styles.badge}>
              <Text style={{ color: 'white' }}>{props.data.badgeNumber}</Text>
            </Badge>
          </View>
          <View
            style={{
              flexDirection: 'row',
              left: -40
            }}>
            <Text style={styles.price}>{props.data.price}</Text>
          </View>
        </View>
        {/*BOTTOM*/}
        <View style={styles.bottomContainer}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              marginBottom: 30
            }}>
            <Icon
              style={{ paddingLeft: 10 }}
              type="feather"
              name="upload"
              color="white"
            />
            <Icon
              iconStyle={{ padding: 10 }}
              type="feather"
              name="heart"
              color="white"
            />
          </View>
          <Text
            style={{
              fontFamily: 'montserrat',
              color: 'white',
              fontSize: 25,
              marginBottom: 20
            }}>
            {props.data.tag}
          </Text>
          <Divider style={{ backgroundColor: 'white' }} />
          {/*BOTTOM ICONS*/}
          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              alignItems: 'flex-start'
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                flex: 2
              }}>
              <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                <Icon
                  size={15}
                  color="white"
                  type="MaterialIcons"
                  name="hourglass-empty"
                />
                <Text style={{ color: 'white', fontSize: 12 }}>
                  {props.data.time}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'flex-start'
                }}>
                <Icon
                  size={15}
                  color="white"
                  type="MaterialIcons"
                  name="chat-bubble-outline"
                />
                <Text style={{ color: 'white', fontSize: 12, paddingLeft: 4 }}>
                  {props.data.language}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                flex: 3,
                justifyContent: 'flex-end'
              }}>
              {/* IDEALLY MAP THRU RATING NUMBER */}
              <Icon size={15} color="white" type="MaterialIcons" name="star" />
              <Icon size={15} color="white" type="MaterialIcons" name="star" />
              <Icon size={15} color="white" type="MaterialIcons" name="star" />
              <Icon size={15} color="white" type="MaterialIcons" name="star" />
              <Icon
                size={15}
                color="white"
                type="MaterialIcons"
                name="star-border"
              />
              <Text style={{ color: 'white', fontSize: 12 }}>
                {' '}
                {props.data.reviews} Reviews
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Slide;

// const Slide = props => {
//   return (
//     <View
//       style={{
//         width: '100%'
//       }}>
//       <ImageBackground
//         source={require('../assets/images/newyork-apt.jpg')}
//         style={styles.image}>
//         <View
//           style={{
//             flex: 1,
//             justifyContent: 'space-between',
//             alignContent: 'center',
//             width: '100%'
//           }}>
//           <View style={styles.topContainer}>
//             <View
//               style={{ flex: 1, flexDirection: 'row', alignItems: 'baseline' }}>
//               <Text style={styles.slideLabel}>NIGHTLIFE</Text>
//               <Badge style={styles.badge}>
//                 <Text style={{ color: 'white' }}>2</Text>
//               </Badge>
//             </View>
//             <View
//               style={{
//                 flexDirection: 'row',
//                 left: -40
//               }}>
//               <Text style={styles.price}>$ 10</Text>
//             </View>
//           </View>
//           {/*BOTTOM*/}
//           <View style={{ padding: 15, justifyContent: 'space-between' }}>
//             <View
//               style={{
//                 flexDirection: 'row',
//                 justifyContent: 'flex-end',
//                 marginBottom: 30
//               }}>
//               <Icon type="feather" name="upload" color="white" />
//               <Icon type="feather" name="heart" color="white" />
//             </View>
//             <Text
//               style={{
//                 fontFamily: 'montserrat',
//                 color: 'white',
//                 fontSize: 20,
//                 marginBottom: 20
//               }}>
//               Checkout out this.
//             </Text>
//             <Divider style={{ backgroundColor: 'white' }} />
//             <View
//               style={{
//                 marginTop: 20,
//                 flexDirection: 'row',
//                 justifyContent: 'space-between'
//               }}>
//               <View
//                 style={{
//                   flexDirection: 'row',
//                   alignItems: 'flex-end'
//                 }}>
//                 <Icon
//                   color="white"
//                   type="MaterialIcons"
//                   name="hourglass-empty"
//                 />
//                 <Text style={{ color: 'white' }}>10:00</Text>
//               </View>
//               <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
//                 <Icon
//                   color="white"
//                   type="MaterialIcons"
//                   name="chat-bubble-outline"
//                 />
//                 <Text style={{ color: 'white' }}>English</Text>
//               </View>
//             </View>
//           </View>
//         </View>
//       </ImageBackground>
//     </View>
//   );
// };
