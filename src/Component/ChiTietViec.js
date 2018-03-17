import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  FlatList
} from 'react-native';
import { SearchBar, Card, Button } from 'react-native-elements'
import { height, width } from '../Global/Global';


export default class ChiTietViec extends Component {
  static navigationOptions = ({ navigation }) => ({
   
    title: 'Chi tiết việc',
    

  });

  render() {
    return (

        <View style={{ flex: 1, }}>

        <View style={{ flex: 1, backgroundColor: 'red', marginHorizontal: 10, marginVertical: 30 }}>
          
            </View>
</View>
       
    );
  }
}


