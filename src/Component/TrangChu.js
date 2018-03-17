import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  FlatList,
  Alert,
} from 'react-native';
import { SearchBar, Card, Button } from 'react-native-elements';
import moment from 'moment';

import { height, width, urlAPI } from '../Global/Global';
import t from '../Public/img/man-in-office-desk-with-computer.png';

export default class TrangChu extends Component {
  static navigationOptions = ({ navigation }) => ({
    tabBarLabel: 'Home',
    // Note: By default the icon is only shown on iOS. Searc  h the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../Public/img/home-button-for-interface.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    ),

    title: 'Trang chủ',
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
      refresh: false,
      mang: [

      ]

    }
  }
  componentWillMount() {
    console.log('ahihi')
    this.loadTrangChu();
  }
  loadTrangChu(){
    fetch(urlAPI + `trangchu`)
    .then(res => res.json())
    .then(resjson => {
        console.log('lay danh sach trang chu', resjson)
        this.setState({
            mang: resjson
        });
    })
    .catch(e => console.log(e));
  }
  _keyExtractor = (item, index) => item._id;
  render() {
    return (

      <ScrollView>
        <View style={{ height: height / 3, justifyContent: 'center', alignContent: 'center' }}>
          <View style={{ margin: 5 }}>
            <SearchBar
              round
              placeholder='Nhập từ khóa hoặc chức danh' />
          </View>
          <View style={{ margin: 5 }}>
            <SearchBar
              round
              placeholder='Chuyên ngành' />
          </View>
          <View>
            <Text>Tìm kiếm</Text>
          </View>
        </View>
        <View style={{ justifyContent: 'center', alignContent: 'center' }}>
          <Button
            buttonStyle={{ backgroundColor: 'red' }}
            title='Công việc mới cập nhật' />
        </View>
        
        <FlatList
          style={{ marginTop: 10,}}
          refreshing={this.state.refresh}
          // onRefresh={() => this.refresh()}
          keyExtractor={this._keyExtractor}
          data={this.state.mang}
          renderItem={({ item }) =>
            <View style={{ flexDirection: 'row', height: height * 0.3, margin: 10, marginTop: 5, borderWidth: 1,}}>
              <TouchableOpacity style={{ padding: 10, flexDirection: 'row', flex: 6 }}
                onPress={() => { this.props.navigation.navigate('ChiTietViec') }}>
                <View style={{ flex: 1.2, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center' }}>
                  <Image source={{ uri: item.hinhanh }} style={{ width: '100%', height: '100%' }} />
                </View>
                <View style={{ marginLeft: 20, flex: 2, justifyContent: 'center' }}>
                  <Text style={{ fontWeight: 'bold', fontSize: 20, color: "black" }}>{ item.tieude } </Text>
                  <Text style={{ color: "black", marginTop: 5 }}>Tên công ty: {item.tencongty} </Text>
                  <Text style={{ color: "black", marginTop: 5 }}>Địa điểm: {item.diadiem} </Text>
                  <Text style={{ color: "black", marginTop: 5 }}>Ngày đăng: {moment(item.ngaydang).utc().format('DD-MM-YYYY')} </Text>
                </View>
              </TouchableOpacity>
            </View>
          }
        /> 
  
        <View style={{ justifyContent: 'center', alignItems: 'center', margin: 5 }}>
          <Button
            icon={{ name: 'flight-takeoff' }}
            buttonStyle={{ backgroundColor: 'red', width: 100 }}
            title='Xem tất cả'
            onPress={() => { this.props.navigation.navigate('DanhSachViec') }} />
        </View>
      </ScrollView>

    );
  }
}


const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});