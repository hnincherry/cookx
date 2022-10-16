import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from "react-native-dynamic-vector-icons";

import { HomeScreen } from '@screen/home'
import { FavoritesScreen } from '@screen/favorites'
import { ExploreScreen } from '@screen/explore'
import { ProfileScreen } from '@screen/account'
import { DetailScreen } from '@screen/detail';
import { FooterCom, IconCom } from 'components'


const Tab: any = createBottomTabNavigator()
const Stack: any = createNativeStackNavigator()

const AppScreens = {
    HomeScreen,
    FavoritesScreen,
    ExploreScreen,
    ProfileScreen,
    DetailScreen
}

const AppStackNavigator = () => {
    return(
        <Stack.Navigator
            initialRouteName='HomeScreen'
            screenOptions={{
                headerShown: false,
                animation: 'fade'
            }}
        >
            {Object.entries({
                ...AppScreens
            }).map(([name, component]) => (
                <Stack.Screen
                    key={name}
                    name={name}
                    component={component}
                    options={() => ({
                        title: name,
                        headerTransparent: true,
                    })}
                />
            ))}

        </Stack.Navigator>
    )
}

const BottomTabNavigator = () => {
    return(
        <Tab.Navigator
            initialRouteName='HomeTab'
            screenOptions={{
                headerShown: false,
            }}
            tabBar={(props:any) => <FooterCom {...props}/>}
        >
            <Tab.Screen
                name='HomeTab'
                component={AppStackNavigator}
                options={{
                  tabBarLabel: 'Home',
                  tabBarIcon: <Icon type='Ionicons' name='home-outline' size={25}/>,
                  tabBarActiveIcon: <Icon type='Ionicons' name='home' size={25} color='#be71f5'/>,
                }}
                listeners={({ navigation }: any) => ({
                  tabPress: (e: any) => {
                    e.preventDefault()
                    navigation.navigate('HomeTab', { screen: 'HomeScreen' })
                  }
                })}
            />
            <Tab.Screen
                name='FavoriteTab'
                component={AppStackNavigator}
                options={{
                  tabBarLabel: 'Favorites',
                  tabBarIcon: <Icon type='MaterialIcons' name='favorite-border' size={25}/>,
                  tabBarActiveIcon: <Icon type='MaterialIcons' name='favorite' size={25} color='#be71f5'/>,
                }}
                listeners={({ navigation }: any) => ({
                  tabPress: (e: any) => {
                    e.preventDefault()
                    navigation.navigate('FavoriteTab', { screen: 'FavoritesScreen' })
                  }
                })}
            />
            <Tab.Screen
                name='ExploreTab'
                component={AppStackNavigator}
                options={{
                  tabBarLabel: 'Explore',
                  tabBarIcon: <Icon type='Ionicons' name='search' size={25}/>,
                  tabBarActiveIcon: <Icon type='Ionicons' name='search' size={25} color='#be71f5'/>,
                }}
                listeners={({ navigation }: any) => ({
                  tabPress: (e: any) => {
                    e.preventDefault()
                    navigation.navigate('ExploreTab', { screen: 'ExploreScreen' })
                  }
                })}
            />
            <Tab.Screen
                name='AccountTab'
                component={AppStackNavigator}
                options={{
                  tabBarLabel: 'Account',
                  tabBarIcon: <Icon type='MaterialCommunityIcons' name='account-circle-outline' size={25}/>,
                  tabBarActiveIcon: <Icon type='MaterialCommunityIcons' name='account-circle' size={25} color='#be71f5'/>,
                }}
                listeners={({ navigation }: any) => ({
                  tabPress: (e: any) => {
                    e.preventDefault()
                    navigation.navigate('AccountTab', { screen: 'ProfileScreen' })
                  }
                })}
            />   
        </Tab.Navigator>
    )
}

export default () => (
    BottomTabNavigator()
)