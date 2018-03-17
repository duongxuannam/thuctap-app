import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions
} from 'react-native';
import t from '../Public/img/man-in-office-desk-with-computer.png';

const { height, width } = Dimensions.get('window');

export default class ThongTin extends Component {
  static navigationOptions = ({ navigation }) => ({
    tabBarLabel: 'Tin Tức',
    // Note: By default the icon is only shown on iOS. Searc  h the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../Public/img/person-learning-by-reading.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    ),

    title: 'Tin tuc',
    // headerLeft: <Button onPress = { ()=> { navigation.navigate('DrawerOpen') }} title = 'info'/>
    headerLeft: <TouchableOpacity onPress={() => { navigation.navigate('DrawerOpen') }}>
      <Image
        style={{ marginLeft: 10 }}
        source={require('../Public/img/menu.png')}
      />
    </TouchableOpacity>


  });
  constructor(props) {
    super(props);
    this.state = {
      mang: [
        {
          id: 1
        }, {
          id: 2
        }, {
          id: 2
        }
      ],
      refresh: false,
    }
  }
  _keyExtractor = (item, index) => item.id;
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <FlatList
          refreshing={this.state.refresh}
          onRefresh={() => this.refresh()}
          keyExtractor={this._keyExtractor}
          data={this.state.mang}
          renderItem={({ item }) =>
            <View style={{ flexDirection: 'row', width: width - 20, height: height / 5.5, margin: 5, marginTop: 5, borderWidth: 1 }}>
              <TouchableOpacity style={{ padding: 10, flexDirection: 'row', flex: 6 }}
               onPress={() => { this.props.navigation.navigate('ChiTietThongTin') }}>

                <View style={{ flex: 1.2, flex: 1, backgroundColor:'red' ,justifyContent: 'center', alignItems: 'center' }}>
                  <Image source={t} style={{ width: '100%', height: '100%' }} />
                </View>
                <View style={{ marginLeft: 20, flex: 2, justifyContent:'center' }}>
                 
                    <Text style={{ fontWeight: 'bold', fontSize: 20, color: "black" }}>Tiêu đề </Text>
                    <Text style={{  color: "black", marginTop: 5 }}>12/1/2018 | 200 views </Text>
                    
                </View>
              </TouchableOpacity>
          
            </View>
          }

        />
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


