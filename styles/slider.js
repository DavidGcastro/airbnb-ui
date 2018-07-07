import { Dimensions } from 'react-native';
const { height } = Dimensions.get('window');

const styles = {
  image: {
    width: 320,
    height: height - 200,
    borderRadius: 20,
    shadowOffset: { width: 10, height: 10 },
    shadowColor: 'black',
    shadowOpacity: 1.0
  }
};

export default styles;
