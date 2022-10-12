import styled from "styled-components";
import Icon from "react-native-dynamic-vector-icons";

type StyledIconProps = {
    iconsize?: any,
    color?: any
}
export const StyledIcon = styled(Icon) <StyledIconProps>`
    font-size: ${props => props.theme.fontSize[props?.iconsize] || props.iconsize || props.theme.fontSize.md}px;
    color: ${props => props.theme.color.typo[props?.color] || props?.color || props.theme.color.typo.text};
`