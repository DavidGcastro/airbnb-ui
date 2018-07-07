import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const styles = {
  
  image: {
    width: width - 40,
    height: height - 200,
    borderRadius: 20,
 
  }
};

export default styles;
