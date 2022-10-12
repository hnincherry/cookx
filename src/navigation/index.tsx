import React from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import { DarkTheme, DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import RootNavigator from './root'


export default (props: any) => {

    const deepLinking = {
        prefixes: ['http://zizawa.com', 'zizawa://'],
        config: {
          screens: {
            Auth: {
              path: 'Auth',
              initialRouteName: 'SignIn',
              screens: {
                SignIn: 'SignIn',
                SignUp: 'SignUp',
                ForgotPass: 'ForgotPass',
                OtpConfirm: 'OtpConfirm',
              }
            },
            App: {
              path: 'App',
              initialRouteName: 'HomeDrawer',
              screens: {
                HomeDrawer: {
                  path: 'HomeDrawer',
                  initialRouteName: 'HomeTab',
                  screens: {
                    HomeTab: {
                      path: 'HomeTab',
                      initialRouteName: 'Home',
                      screens: {
                        Home: 'Home'
                      }
                    },
                    ShopTab: {
                      path: 'ShopTab',
                      initialRouteName: 'ShopList',
                      screens: {
                        ShopList: 'ShopList'
                      }
                    },
                    CartTab: {
                      path: 'CartTab',
                      initialRouteName: 'Cart',
                      screens: {
                        Cart: 'Cart',
                        Payment: 'Payment/:id/:payment_status'
                      }
                    },
                  }
                },
                SettingDrawer: {
                  path: 'SettingDrawer',
                  initialRouteName: 'SettingList',
                  screens: {
                    SettingList: 'SettingList',
                    NotificationList: 'NotificationList',
                    NotificationDetail: 'NotificationDetail/:id',
                  }
                },
                CommonDrawer: {
                  path: 'CommonDrawer',
                  initialRouteName: 'Common',
                  screens: {
                    Common: 'Common'
                  }
                },
              }
            }
          }
        }
    }

    return (
        <SafeAreaProvider>
            <KeyboardAvoidingView
                  behavior={ Platform.OS === 'ios' ? 'padding' : 'height'}
                  style={{flex:1}}
                >
                    <NavigationContainer
                      linking={deepLinking}
                      fallback={null}
                    >
                        <RootNavigator {...props}/>
                    </NavigationContainer>
                </KeyboardAvoidingView>
        </SafeAreaProvider>
    )
}