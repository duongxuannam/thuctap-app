import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';


class SlideMenu extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ backgroundColor: '#276ddd', flex: 1, justifyContent: 'center', alignItems: 'center' }} >
          <Image
            source={require('../Public/img/tdm.png')}
            style={{}}
          />
        </View>
        <View style={{
          flex: 0.7, marginLeft: 20,
          marginRight: 20, justifyContent: 'center'
        }} >
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'  }}>
          <Image style={{ width: 40, height: 40, }}  source={require('../Public/img/dangnhap.png')} />
          </View>
          <TouchableOpacity style={{ flex: 4, marginLeft: 20 }} 
            onPress={() => { this.props.navigation.navigate('TaiKhoan') }}>
          <Text >Đăng nhập/Đăng kí</Text>
            </TouchableOpacity>
          
        </View>
        </View>
        <View style={{
          flex: 4,
          borderTopColor: 'black',
          borderTopWidth: 1,

          paddingTop: 20,
          marginLeft: 20,
          marginRight: 20
        }} >
          <View style={{ flex: 7 }} >

          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'  }}>
          <Image style={{ width: 40, height: 40, }}  source={require('../Public/img/chamthan.png')} />
          </View>
          <TouchableOpacity style={{ flex: 4, marginLeft: 20 }} 
          onPress={() => { this.props.navigation.navigate('ThoaThuanSuDung') }}>
          <Text >Thỏa thuận sử dụng</Text>
            </TouchableOpacity>
        </View>

            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'  }}>
            <Image style={{ width: 40, height: 40, }}  source={require('../Public/img/locked.png')} />
            </View>
            <TouchableOpacity style={{ flex: 4, marginLeft: 20 }}
            onPress={() => { this.props.navigation.navigate('QuyDinhBaoMat') }}>
          <Text >Quy định bảo mật</Text>
            </TouchableOpacity>
          </View>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'  }}>
              <Image style={{ width: 40, height: 40, }}  source={require('../Public/img/phone-contact.png')} />
              </View>
              <TouchableOpacity style={{ flex: 4, marginLeft: 20 }} 
                onPress={() => { this.props.navigation.navigate('LienHe') }}>
          <Text >Liên hệ</Text>
            </TouchableOpacity>
            </View>
            <View style={{ flex:2 }}>
              
            </View>
          
            
          </View>
          <View style={{
            flex: 1,
            borderTopColor: 'black',
            borderTopWidth: 1,
            marginTop: 20,
            paddingTop: 20,
            marginLeft: 20,
            marginRight: 20
          }} >
            <Text>Phiên bản: 1.0</Text>


          </View>
        </View>
      </View>
    );
  }
}

export default SlideMenu;