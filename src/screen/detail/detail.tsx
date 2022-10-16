import { View, ScrollView, Text, Image, StyleSheet, SafeAreaView, Button, TouchableOpacity } from 'react-native';
import React, { useState } from 'react'
import Icon from "react-native-dynamic-vector-icons";

import { StyledText } from 'theme'

type DetailScreenProps = {
  navigation?: any,
  route?: any,
}

export const DetailScreen: React.FC<DetailScreenProps> = ({ navigation, route, ...props }) => {

  const { title, description } = route.params
  const detailImage = route.params.image

  const [isFavorite, setIsFavorite] = useState(false)

  const handleFavorite = () => {
    setIsFavorite(!isFavorite)
  }

  return (
    <SafeAreaView style={{ width: '100%', height: '100%', flex: 1, position: 'relative' }}>
      <ScrollView style={{ flex: 1, }}
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
        scrollEnabled={true}
      >

        <View style={{ flexGrow: 1 }}>
          <View>
            <Image source={detailImage} style={styles.image} />
          </View>

          <View style={{ padding: 10 }}>
            <Text style={{ fontSize: 30, padding: 10, color: '#000' }}>{title}</Text>
            <Text style={{ color: '#000', textAlign: 'justify', fontSize: 20 }}>
              {description}
            </Text>
            <Text style={{ color: '#000', textAlign: 'justify', fontSize: 20 }}>
              {description}
            </Text>
            <Text style={{ color: '#000', textAlign: 'justify', flex: 1 }}>
              {description}
            </Text>
          </View>
        </View>
      </ScrollView>
      <Icon type='AntDesign' name='leftcircle' size={30} color='#ffffff' style={styles.iconLeft} onPress={() => navigation.goBack()} />
      <Icon type='Entypo' name='circle' size={29} color='#ffffff' style={styles.iconCircle} />
      <TouchableOpacity style={styles.iconHeart} onPress={() => handleFavorite()}>
        <Icon type='AntDesign' name={isFavorite ? 'heart' : 'hearto'} size={15} color='#ffffff' />
      </TouchableOpacity>
    </SafeAreaView>
    //   <ScrollView showsVerticalScrollIndicator={false} style={{flexDirection: 'column'}}>

    //     <View style={{ backgroundColor: 'red'}}>
    //       <Image source={detailImage} style={styles.image} />
    //     </View>

    //     <View style={{ backgroundColor: 'yellow'}}>
    //       <Text style={{ fontSize: 30, padding: 10, color: '#000' }}>{title}</Text>
    //       <Text style={{ padding:10, fontSize: 20, textAlign: 'justify'}}>{description}</Text>
    //     </View>
    //      */}
    //     {/* <View style={{ flex: 1 }}>
    //       <StyledText fontSize={20} padding={10}>{description}</StyledText>
    //     </View> */}
    //     {/* <Button title='hello'/>
    //     <Button title='hello'/>
    //     <Button title='hello'/>
    //     <Button title='hello'/>

    //   </ScrollView>
    //   <Icon type='AntDesign' name='leftcircle' size={30} color='#ffffff' style={styles.iconLeft} onPress={() => navigation.goBack()} />
    //   <Icon type='Ionicons' name='ios-heart-circle-outline' size={35} color='#ffffff' style={styles.iconRight} /> 
    //   </SafeAreaView> */}

    // <View style={{flex:1}}>
    //   <View style={{flex:3, backgroundColor:'red'}}>
    //     <Image source={detailImage} style={styles.image} />
    //   </View>
    //   <View style={{flex:2, backgroundColor:'yellow'}}>
    //     <Text style={{ fontSize: 30, padding: 10, color: '#000' }}>{title}</Text>
    //     <Text style={{ padding:10 ,fontSize: 20, textAlign: 'justify'}}>{description}</Text>
    //   </View>
    //   <View style={{flex:1, backgroundColor:'green'}}></View>
    // </View>
  )
}

const styles = StyleSheet.create({
  image: {
    position: 'relative',
    width: '100%',
    height: 300,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  iconLeft: {
    position: 'absolute',
    top: 10,
    left: 10
  },
  iconCircle: {
    position: 'absolute',
    top: 10,
    right: 10
  },
  iconHeart: {
    position: 'absolute',
    top: 17,
    right: 17
  }
})


