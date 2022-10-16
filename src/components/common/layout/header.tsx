import React from 'react'
import {View, Text} from 'react-native'

import { StyledHeader, StyledText } from 'theme'

type HeaderComProps = {
    text?: string
}

export const HeaderCom: React.FC<HeaderComProps> = (props:any) => {

    return(
        <StyledHeader>
            <StyledText fontSize={25} fontWeight='bold' color='#be71f5' padding={10}>{props.text}</StyledText>
        </StyledHeader>
    )
}