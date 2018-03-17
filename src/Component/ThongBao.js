import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';


export default class ThongBao extends Component {
  static navigationOptions = ({ navigation }) => ({
    tabBarLabel: 'Thông Báo',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../Public/img/alarm.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
    title: 'Thong bao',
    // headerLeft: <Button onPress = { ()=> { navigation.navigate('DrawerOpen') }} title = 'info'/>
    headerLeft: <TouchableOpacity onPress = { ()=> { navigation.navigate('DrawerOpen') }}>
      <Image
      style={{  marginLeft: 10 }}
        source={require('../Public/img/menu.png')}
      />
    </TouchableOpacity>


  });
  render() {
    return (
      <View>
        <Text>
       Trang Chu
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


