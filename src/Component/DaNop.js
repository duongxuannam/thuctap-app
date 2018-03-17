import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';


export default class DaNop extends Component {
  static navigationOptions = ({ navigation }) => ({
    

    title: 'Da nop',
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
      theoo doi
        </Text>
    
      </View>
    );
  }
}


