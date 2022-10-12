import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import AppNavigator from './app'

const Stack:any = createNativeStackNavigator()

export default (props: any) => (
    <Stack.Navigator
        screenOptions={{
            headerShown: false,
            animation: 'fade' 
        }}
        {...props}
    >
        <Stack.Screen name='App' component={AppNavigator}/>
        
    </Stack.Navigator>
)
