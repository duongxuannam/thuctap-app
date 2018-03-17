import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');
module.exports = {
  height,
  width,
  urlAPI: `https://apimongo.herokuapp.com/`,
};