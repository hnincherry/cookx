import { View, Text } from 'react-native'
import React from 'react'

import { HeaderCom, TextInputCom } from 'components'
import { SafeAreaProvider } from 'react-native-safe-area-context';

export const ExploreScreen = () => {
  return (
    <SafeAreaProvider style={{flex:1}}>
      <HeaderCom text='Explore'/>
      <TextInputCom type='Ionicons' name='search' color='#be71f5zw' iconRight/>
    </SafeAreaProvider>
  )
}

