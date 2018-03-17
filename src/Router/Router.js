import React from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    Button
} from 'react-native';
import {
    StackNavigator,
    TabNavigator,
    DrawerNavigator,
} from 'react-navigation';

import TrangChu from '../Component/TrangChu';
import ThongTin from '../Component/ThongTin';
import ThongBao from '../Component/ThongBao';
import DaNop from '../Component/DaNop';
import TheoDoi from '../Component/TheoDoi';
import SlideMenu from '../Component/SlideMenu';
import LienHe from '../Component/LienHe';
import QuyDinhBaoMat from '../Component/QuyDinhBaoMat';
import ThoaThuanSuDung from '../Component/ThoaThuanSuDung';
import DanhSachViec from '../Component/DanhSachViec';
import ChiTietViec from '../Component/ChiTietViec';
import ChiTietThongTin from '../Component/ChiTietThongTin';
import TaiKhoan from '../Component/TaiKhoan';


const StackTrangChu = StackNavigator({
    TrangChu: {
        screen: TrangChu,

    }
});
const StackThongTin = StackNavigator({
    ThongTin: {
        screen: ThongTin
    }
});
const StackThongBao = StackNavigator({
    ThongBao: {
        screen: ThongBao
    }
});


const MyWorkTabBar = TabNavigator({
    TheoDoi: {
        screen: TheoDoi
    },
    DaNop: {
        screen: DaNop
    }
}, {
        tabBarPosition: 'top',
        swipeEnabled: true,
        tabBarOptions: {
            style: {
                backgroundColor: 'red',
            }
        }
    });

const StackMyWorkTabBar = StackNavigator({
    MyWorkTabBar: {
        screen: MyWorkTabBar
    }
});

export const TabBar = TabNavigator({
    TrangChu: {
        screen: StackTrangChu,
    },
    ThongTin: {
        screen: StackThongTin,
    },
    ViecCuaToi: {
        screen: StackMyWorkTabBar,
        navigationOptions: {
            tabBarLabel: 'MyWork',
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={require('../Public/img/man-in-office-desk-with-computer.png')}
                    style={[styles.icon, { tintColor: tintColor }]}
                />
            ),

        }
    },
    // ViecCuaToi: {
    //     screen: ViecCuaToi

    // },
    ThongBao: {
        screen: StackThongBao,
    }
}, {
        tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: false,
        lazyLoad: true,
        tabBarOptions: {
            showIcon: true,
            activeTintColor: 'red',
            labelStyle: {
                fontSize: 10,
            },
          
            style: {
                backgroundColor: '#276ddd',
            }
        },
    });
const StackSlide = StackNavigator({
    Tab: {
        screen: TabBar,
        navigationOptions: {

            header: null
        }
    },
    SlideMenu: {
        screen: SlideMenu,
    },
    LienHe: {
        screen: LienHe,
    }
    ,
    ThoaThuanSuDung: {
        screen: ThoaThuanSuDung,
    }
    ,
    QuyDinhBaoMat: {
        screen: QuyDinhBaoMat,
    }
});
const StackMain = StackNavigator({
    TrangChu: {
        screen: TabBar,
        navigationOptions: {
            header: null
        }
    },
    DanhSachViec: {
        screen: DanhSachViec,
    },
    ChiTietViec: {
        screen: ChiTietViec
    },
    ChiTietThongTin: {
        screen: ChiTietThongTin
    },
    TaiKhoan: {
        screen: TaiKhoan
    }
});

export const Drawer = DrawerNavigator({
    Home: {
        screen: StackMain,
    },
    Menu: {
        screen: StackSlide,
    },
},
    {
        drawerWidth: 300,
        drawerPosition: 'left',

        contentComponent: props => <SlideMenu  {...props} />
    });


const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
    },
});
