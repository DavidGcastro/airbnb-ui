import { Dimensions } from 'react-native';
const { height } = Dimensions.get('window');

const styles = {
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: '100%',
    height: height - 150,
    borderRadius: 10,
    position: 'absolute'
  },
  topContainer: {
    top: 20,
    left: 20,
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  slideLabel: {
    color: 'white',
    borderWidth: 0,
    fontSize: 15,
    borderRadius: 3,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 3,
    paddingBottom: 3,
    overflow: 'hidden',
    backgroundColor: '#FF5F53',
    letterSpacing: 0.5,
    fontFamily: 'montserrat'
  },
  badge: {
    backgroundColor: '#FF5F53',
    borderColor: 'white',
    borderWidth: 2,
    top: 4,
    margin: 3
  },
  bottomContainer: {
    top: height - 400,
    padding: 20
  },
  price: {
    color: 'white',
    fontSize: 30,
    fontFamily: 'montserrat'
  }
};

export default styles;
