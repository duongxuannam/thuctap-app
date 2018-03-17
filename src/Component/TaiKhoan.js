import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    Alert
} from 'react-native';
import { SocialIcon, FormInput, FormLabel, FormValidationMessage, colors } from 'react-native-elements';

const { height, width } = Dimensions.get('window');

export default class TaiKhoanb extends Component {
    static navigationOptions = ({ navigation }) => ({

        title: 'Đăng nhập/ Đăng ký',



    });
    constructor(props) {
        super(props);
        this.state = {
            dangNhap: true
        }
    }
    render() {
        const dangNhap = (
            <View>
                <View style={{ justifyContent: 'center', alignItems: 'center', margin: 20 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, color: "black" }}>
                        Đăng nhập để bắt đầu
                </Text>
                </View>
                <View style={{}}>
                    <FormLabel
                        labelStyle={{ color: 'black' }}
                    >Email</FormLabel>
                    <FormInput
                        onChangeText={() => { }}


                    />
                    <FormLabel
                        labelStyle={{ color: 'black' }}
                    >Mật khẩu</FormLabel>
                    <FormInput
                        onChangeText={() => { }}
                        secureTextEntry
                    />
                    <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: 'orange', height: 50, borderRadius: 20, marginLeft: 20, marginRight: 20 }}>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text> logo </Text>
                        </View>
                        <View style={{ flex: 3, justifyContent: 'center' }}>
                            <Text style={{ fontWeight: 'bold', color: "white" }}>Đăng nhập</Text>
                        </View>

                    </TouchableOpacity>

                    <TouchableOpacity style={{ backgroundColor: 'blue', height: 50, borderRadius: 20, marginLeft: 20, marginRight: 20, marginTop: 20, flexDirection: 'row' }}>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text> logo </Text>
                        </View>
                        <View style={{ flex: 3, justifyContent: 'center' }}>
                            <Text style={{ fontWeight: 'bold', color: "white" }}>Đăng nhập bằng facebook</Text>
                        </View>
                    </TouchableOpacity>


                </View>
                <View style={{ height: 50, justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity
                        onPress={() => { this.setState({ dangNhap: false }) }}>
                        <Text style={{ color: "blue" }}>
                            Đăng kí
                    </Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
        const dangKi = (
            <View>
                <View style={{ justifyContent: 'center', alignItems: 'center', margin: 20 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, color: "black" }}>
                        Đăng kí
            </Text>
                </View>
                <View style={{}}>
                    <FormLabel
                        labelStyle={{ color: 'black' }}
                    >Email</FormLabel>
                    <FormInput
                        onChangeText={() => { }}


                    />
                    <FormLabel
                        labelStyle={{ color: 'black' }}
                    >Mật khẩu</FormLabel>
                    <FormInput
                        onChangeText={() => { }}
                        secureTextEntry
                    />
                    <FormLabel
                        labelStyle={{ color: 'black' }}
                    >Nhập lại mật khẩu</FormLabel>
                    <FormInput
                        onChangeText={() => { }}
                        secureTextEntry
                    />
                    <TouchableOpacity style={{ backgroundColor: 'orange', height: 50, borderRadius: 20, marginLeft: 20, marginRight: 20, justifyContent: 'center', alignItems: 'center' }}>

                        <Text style={{ fontWeight: 'bold', color: "white" }}>Đăng kí</Text>

                    </TouchableOpacity>
                </View>
                <View style={{ height: 50, justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity
                        onPress={() => { this.setState({ dangNhap: true });
                        console.log(this.state) }}>
                        <Text style={{ color: "blue" }}>
                            Đăng nhập
                </Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
        const main = this.state.dangNhap === true ? dangNhap : dangKi;
        return (
            <View style={{ backgroundColor: '#276ddd', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ backgroundColor: 'white', width: width * 7 / 9, height: height * 0.7 }}>
                    {main}


                </View>

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


