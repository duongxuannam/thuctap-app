import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';


export default class TheoDoi extends Component {
  static navigationOptions = ({ navigation }) => ({
    

    title: 'Theo doi',
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
      <View style={{ justifyContent: 'center', alignItems:'center' }}>
        <Text>
       theo doi
        </Text>
        <Text>
       theo doi
        </Text>
        <Text>
       theo doi
        </Text>
        <Text>
       theo doi
        </Text>
        <Text>
       theo doi
        </Text>
        <Text>
       theo doi
        </Text>
        <Text>
       theo doi
        </Text>
        <Text>
       theo doi
        </Text>
        <Text>
       theo doi
        </Text>
        <Text>
       theo doi
        </Text>
        <Text>
       theo doi
        </Text>
        <Text>
       theo doi
        </Text>
        <Text>
       theo doi
        </Text>
        <Text>
       theo doi
        </Text>
    
      </View>
    );
  }
}


