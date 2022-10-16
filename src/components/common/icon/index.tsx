import React from 'react'

import { StyledIcon } from 'theme'
import Icon from "react-native-dynamic-vector-icons";

type IconComProps = {
  type?: string,
  name?: string,
  color?: string,
  iconsize?: any,
  style?: any,
  onPress?: () => void
}
export const IconCom: React.FC<IconComProps> = (props:any) => <Icon size={props.iconsize ? props.iconsize : 25} {...props} />

IconCom.defaultProps = {
  type: 'MaterialIcons'
}