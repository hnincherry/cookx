import styled from "styled-components";
import { TouchableOpacity } from 'react-native';

type StyledCardComProps = {
    background?: any,
}
export const StyledCard = styled(TouchableOpacity) <StyledCardComProps>`
    background-color: ${(props: any) => props.background || '#ffffff'};
    margin-left: ${(props: any) => props.marginLeft || 15}px;
    margin-right: ${(props: any) => props.marginRight || 15}px;
    margin-bottom: 5px;
    margin-top: 10px;
    padding: ${(props:any) => props.padding || 0}px;
    border-radius: 20px;
    elevation: 2;
`