import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
  ActivityIndicator,
  Alert,
} from 'react-native';
import moment from 'moment';
import { SearchBar, Card, Button } from 'react-native-elements';


import { height, width, urlAPI } from '../Global/Global';
import t from '../Public/img/man-in-office-desk-with-computer.png';

export default class DanhSachViec extends Component {
  static navigationOptions = ({ navigation }) => ({

    title: 'Danh sách việc',


  });
  constructor(props) {
    super(props);
    this.state = {
      sotrang: 1,
      refresh: false,
      mang: [
      ],
      loading: false,
    }
  }
  componentDidMount() {
    this.setState({
      loading: true,
    })
    fetch(urlAPI + `danhsachcongviec/1`)
      .then(res => res.json())
      .then(resjson => {
        console.log('data didmount', resjson)
        this.setState({
          mang: resjson,
          loading: false,
          sotrang: this.state.sotrang + 1
        });
      })
      .catch(e => console.log(e));
  }

  refresh() {
    this.setState({
      refresh: true
    });
    fetch(urlAPI + `danhsachcongviec/1`)
      .then(res => res.json())
      .then(resjson => {
        this.setState({
          mang: resjson,
          refresh: false,
          sotrang: 2
        });
      })
      .catch(e => console.log(e));

  };
  loadMore = () => {
    this.setState({
      loading: true,
    })
    fetch(urlAPI + `danhsachcongviec/` + `${this.state.sotrang}`)
      .then(res => res.json())
      .then(resjson => {
        if (resjson.length != 0) {
          this.setState({
            mang: this.state.mang.concat(resjson),
            loading: false,
            sotrang: this.state.sotrang + 1,
          });
          console.log('so trang', this.state.sotrang)
          console.log('so mang', this.state.mang)

        }
        else {
          Alert.alert(
            'Thong bao',
            'Da het du lieu',
            [
              { text: 'OK', onPress: () => { this.setState({ loading: false, }) } }
            ]
          )
        }
      })
      .catch(e => console.log(e));
  }
  renderHeader = () => {

    return <SearchBar placeholder='Nhap tu khoa' lightTheme round />
  };
  renderFooter = () => {
    if (!this.state.loading) return null;
    return (
      <View style={{ paddingVertical: 20, }} >
        <ActivityIndicator animating size='large' />
      </View>
    )
  }
  _keyExtractor = (item, index) => item._id;
  render() {
    return (
      <FlatList
        ListHeaderComponent={() => this.renderHeader()}
        ListFooterComponent={() => this.renderFooter()}
        style={{ marginTop: 10, }}
        refreshing={this.state.refresh}
        onRefresh={() => this.refresh()}
        onEndReached={() => this.loadMore()}
        onEndReachedThreshold={0.01}
        keyExtractor={this._keyExtractor}
        data={this.state.mang}
        renderItem={({ item }) =>
          <View>
            <View style={{ flexDirection: 'row', height: height * 0.3, margin: 10, marginTop: 5, borderWidth: 0, }}>
              <TouchableOpacity style={{ padding: 10, flexDirection: 'row', flex: 6 }}
                onPress={() => { this.props.navigation.navigate('ChiTietViec') }}>
                <View style={{ flex: 1.2, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center' }}>
                  <Image source={t} style={{ width: '100%', height: '100%' }} />
                </View>
                <View style={{ marginLeft: 20, flex: 2, justifyContent: 'center' }}>
                  <Text style={{ fontWeight: 'bold', fontSize: 20, color: "black" }}>{item.tieude} </Text>
                  <Text style={{ color: "black", marginTop: 5 }}>Tên công ty: {item.tencongty} </Text>
                  <Text style={{ color: "black", marginTop: 5 }}>Địa điểm: {item.diadiem} </Text>
                  <Text style={{ color: "black", marginTop: 5 }}>Ngày đăng: {moment(item.ngaydang).utc().format('DD-MM-YYYY')} </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{ height: 1, width: '86%', backgroundColor: '#CED0CE', marginLeft: '10%' }} >
            </View>
          </View>
        }
      />

    );
  }
}

