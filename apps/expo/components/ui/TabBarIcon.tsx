import { ComponentProps } from "react"
import {
  FontAwesome5,
  FontAwesome6,
  Feather,
  FontAwesome,
} from '@expo/vector-icons'
import { StyleProp, TextStyle } from "react-native"

function TabBarIcon(props: {
  name: ComponentProps<
    | typeof FontAwesome
    | typeof Feather
    | typeof FontAwesome5
    | typeof FontAwesome6
  >['name']
  color: string
  library?: 'FontAwesome' | 'FontAwesome5' | 'Feather' | 'FontAwesome6'
}) {
  const IconComponent =
    props.library === 'FontAwesome6'
      ? FontAwesome6
      : props.library === 'FontAwesome5'
        ? FontAwesome5
        : props.library === 'FontAwesome'
          ? FontAwesome
          : Feather


  return (
    <IconComponent
      size={28}
      style={[{ position: 'absolute' }, props.style]}
      {...props}
    />
  )
}


export default TabBarIcon