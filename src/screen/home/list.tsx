import { View, Text, StyleSheet, ScrollView, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';
import React from 'react'

import { CardCom, HeaderCom } from 'components'
import { StyledText } from 'theme'

const menu = [
  {
    id: 1,
    name: 'chicken',
    items: [
      {
        id: 1,
        name: 'chicken fried',
        description: 'Lorem ipsum, in graphical and textual context, refers to filler text that is placed in a document or visual presentation Lorem ipsum, in graphical and textual context, refers to filler text that is placed in a document or visual presentation Lorem ipsum. in graphical and textual context, refers to filler text that is placed in a document or visual presentation',
        image: require('asset/img/cookx/chicken_curry.jpg')
      },
      {
        id:2,
        name: 'potato chicken',
        description: 'Lorem ipsum, in graphical and textual context, refers to filler text that is placed',
        image: require('asset/img/cookx/chicken_curry.jpg')
      }
    ]
    
  },
  {
    id: 2,
    name: 'chicken curry',
    items: [
      {
        id: 1,
        name: 'chicken fried',
        description: 'Lorem ipsum, in graphical and textual context, refers to filler text that is placed in a document or visual presentation',
        image: require('asset/img/cookx/chicken_curry.jpg')
      },
      {
        id:2,
        name: 'potato chicken',
        description: 'Lorem ipsum, in graphical and textual context, refers to filler text that is placed in a document or visual presentation',
        image: require('asset/img/cookx/chicken_curry.jpg')
      }
    ]
  },
  {
    id: 3,
    name: 'chicken',
    items: [
      {
        id: 1,
        name: 'chicken fried',
        description: 'Lorem ipsum, in graphical and textual context, refers to filler text that is placed in a document or visual presentation',
        image: require('asset/img/cookx/chicken_curry.jpg')
      },
      {
        id:2,
        name: 'potato chicken',
        description: 'Lorem ipsum, in graphical and textual context, refers to filler text that is placed in a document or visual presentation',
        image: require('asset/img/cookx/chicken_curry.jpg')
      }
    ]
  },
  {
    id: 4,
    name: 'chicken',
    items: [
      {
        id: 1,
        name: 'chicken fried',
        description: 'Lorem ipsum, in graphical and textual context, refers to filler text that is placed in a document or visual presentation',
        image: require('asset/img/cookx/chicken_curry.jpg')
      },
      {
        id:2,
        name: 'potato chicken',
        description: 'Lorem ipsum, in graphical and textual context, refers to filler text that is placed in a document or visual presentation',
        image: require('asset/img/cookx/chicken_curry.jpg')
      }
    ]
  },
  {
    id: 5,
    name: 'chicken',
    items: [
      {
        id: 1,
        name: 'chicken fried',
        description: 'Lorem ipsum, in graphical and textual context, refers to filler text that is placed in a document or visual presentation',
        image: require('asset/img/cookx/chicken_curry.jpg')
      },
      {
        id:2,
        name: 'potato chicken',
        description: 'Lorem ipsum, in graphical and textual context, refers to filler text that is placed in a document or visual presentation',
        image: require('asset/img/cookx/chicken_curry.jpg')
      }
    ]
  }
]

export const HomeScreen = (props:any) => {

  const { navigation } = props
  return (
    <SafeAreaView style={styles.container}>
   
      <HeaderCom text='Cookx'/>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {
          menu.map((item:any,index:any) => (
            <CardCom
              key={index}
              text={item.name}
              bgColor='#be71f5'
              color='#ffffff'
              marginLeft='10'
              marginRight='5'
              padding='5'
            />
          ))
        }
      </ScrollView>
      <ScrollView showsVerticalScrollIndicator={false} >
        {
          menu?.map((item:any) => (
            item?.items.map((data:any,i:any) => ( 
              <CardCom
              key={i}
              text={data.name}
              image={data.image}
              onPress={() => navigation.navigate('DetailScreen', {title: data.name, description: data.description, image: data.image})}
              cart/>
            ))
          ))
        }
      </ScrollView>
      
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})