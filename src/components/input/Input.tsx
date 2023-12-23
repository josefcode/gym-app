import { Input as NativeBaseInput, IInputProps}  from 'native-base'

export const Input = ({...rest}: IInputProps) => {
  return (
    <NativeBaseInput   
    variant="outline"
    size="md"
    h = {50}
    bg= "gray.700"
    mb = {5}
    color = "white"
    placeholderTextColor= "gray.300"
    borderWidth = {0}
    _focus = {{
        bg: "gray.700",
        borderWidth: 1,
        borderColor: 'green.500'
    }}
    {...rest}
    />

  )
}
