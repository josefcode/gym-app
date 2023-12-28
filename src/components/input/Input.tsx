import { Input as NativeBaseInput, IInputProps, FormControl}  from 'native-base'

interface Props extends IInputProps {
     errorMessage?: string | null;
}

export const Input = ({errorMessage = null, isInvalid, color = 'gray.700', ...rest}: Props) => {
  const invalid = !!errorMessage || isInvalid;
  return (
    <FormControl isInvalid = {invalid}  mb = {5}>
    <NativeBaseInput 
    variant="outline"
    size="md"
    h = {50}
    bg= {color}
    isInvalid = {isInvalid}
    
    color = "white"
    placeholderTextColor= "gray.300"
    borderWidth = {0}
    _invalid={{
      borderWidth: 1,
      borderColor : 'red.500'
    }}
    _focus = {{
        bg: "gray.700",
        borderWidth: 1,
        borderColor: 'green.500'
    }}
    {...rest}
    />

    <FormControl.ErrorMessage _text = {{color : 'red.500'}}>
      {errorMessage}
    </FormControl.ErrorMessage>
</FormControl>
  )
}
