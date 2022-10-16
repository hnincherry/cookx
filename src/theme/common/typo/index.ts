import styled from "styled-components";
import { Text } from 'react-native'

type StyledTypoProps = {
    fontSize?: any,
    color?: any,
    padding?: any,
    fontWeight?: string
}

export const StyledText = styled(Text)<StyledTypoProps> `
    color: ${(props:any) => props.color || '#464547'};
    font-size: ${(props:any) => props.fontSize || 20}px;
    padding: ${(props:any) => props.padding || 5}px;
    flex: 1px;
    font-weight: ${(props:any) => props.fontWeight || 'normal'};
`
