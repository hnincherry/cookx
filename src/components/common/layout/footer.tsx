import { TouchableOpacity, StyleSheet, View, Text, Dimensions } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import Icon from 'asset/icon/ok_kitchen'

type FooterComProps = {
    navigation?: any,
    state?: any,
    descriptors?: any,
}

type Style = {
    imgContainer?: any,
    iconContainer?: any
}

const { width } = Dimensions.get('window')
export const FooterCom: React.FC<FooterComProps> = props => {

    const {navigation, state, descriptors} = props

    return (
        <SafeAreaView style={{backgroundColor: '#ffffff', flexDirection: 'row',}}>
            {state?.routes.map((route: any,index: any) => {
                const { options } = descriptors && descriptors[route.key]

                const label = 
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name

                const isFocused = state.index === index

                const icon = 
                    options.tabBarIcon !== undefined
                        ? (isFocused ? options.tabBarActiveIcon : options.tabBarIcon)
                        : <Icon.HomeSvg/>

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true
                    })

                    if(!isFocused && !event.defaultPrevented) {
                        navigation.navigate({name: route.name, merge: true})
                    }
                }

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key
                    })
                }


                return(
                    <TouchableOpacity
                        key={index}
                        accessibilityRole='button'
                        accessibilityState={isFocused ? {selected: true} : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={styles.iconContainer}
                    >
                        <View style={styles.imgContainer}>
                            {icon}
                        </View>
                        <Text style={{fontSize: 10, color: isFocused ? '#be71f5' : '#464547'}}>{label}</Text>
                    </TouchableOpacity>
                )
            })}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create<Style>({
    imgContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 3
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 5,
        paddingBottom: 5,
        width: width/4,
    }
})

