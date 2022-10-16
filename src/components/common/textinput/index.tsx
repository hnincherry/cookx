import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { StyledTextInput } from 'theme'
import { IconCom } from 'components';

type TextInputComProps = {
    iconRight?: boolean,
    type?: string,
    name?: string,
    color?: string,
    iconsize?: string
}

export const TextInputCom: React.FC<TextInputComProps> = ({ iconRight, ...props }) => {
    return (
        <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: .9 }}>
                <StyledTextInput placeholder='Search...' placeholderTextColor='#969494' />
            </View>

            <View style={styles.searchIconCon}>
                {
                    iconRight ?
                        <TouchableOpacity>
                            <IconCom type={props.type} name={props.name} iconsize={props.iconsize} color={props.color} />
                        </TouchableOpacity>

                        :
                        null
                }
            </View>

        </View>


    )
}

const styles = StyleSheet.create({
    searchIconCon: { 
        flex: .1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#ffffff', 
        borderRadius: 50, 
        height: 50, 
        marginTop: 10, 
        marginRight: 5, 
        marginBottom: 10, 
        elevation: 3 
    }
})