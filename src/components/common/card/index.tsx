import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native';

import { StyledCard, StyledText } from 'theme'

type CardComProps = {
    text?: any,
    image?: any,
    bgColor?: any,
    color?: any,
    marginLeft?: string,
    marginRight?: string,
    padding?: string,
    cart?: boolean,
    children?: any,
    onPress?: any
}
export const CardCom: React.FC<CardComProps> = ({ text, image, bgColor, ...props }) => {
    return (
        <StyledCard background={bgColor} {...props}>

            {
                image &&
                <Image source={image} style={{ width: '100%', height: 200, borderRadius: 10 }} />
            }

            <View style={{ height: 50, flexDirection: 'row' }}>
                <StyledText color={props?.color}>{text}</StyledText>
                {
                    props.cart ? (
                        <TouchableOpacity>
                            <StyledText>Cart</StyledText>
                        </TouchableOpacity>
                    ) : null
                }

            </View>
            {
                props?.children
            }
        </StyledCard>
    )
}
