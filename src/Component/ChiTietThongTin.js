import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

export default class ChiTietThongTin extends Component {
  static navigationOptions = ({ navigation }) => ({
  
    title: 'Chi tiết',
 


  });
  render() {
    return (
      <View>
        <Text>
      Thong tin 
        </Text>
    
      </View>
    );
  }
}
const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});


