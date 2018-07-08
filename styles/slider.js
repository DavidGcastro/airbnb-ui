import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const styles = {
  image: {
    width: '100%',
    height: height - 200
  },
  topContainer: {
    top: 20,
    left: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  slideLabel: {
    color: 'white',
    borderWidth: 0,
    fontSize: 15,
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 3,
    paddingBottom: 3,
    overflow: 'hidden',
    backgroundColor: '#FF5A5F',
    letterSpacing: 0.5,
    fontFamily: 'montserrat'
  },
  badge: {
    backgroundColor: '#FF5A5F',
    borderColor: 'white',
    borderWidth: 2,
    top: 4,
    margin: 3
  },
  price: {
    color: 'white',
    fontSize: 30,
    fontFamily: 'montserrat'
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    position: 'absolute',
    bottom: 100
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    left: 250,
    marginBottom: 20
  }
};

export default styles;
