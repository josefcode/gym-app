import { HStack, Heading, Image, Text, VStack, Icon } from "native-base"
import { TouchableOpacity, TouchableOpacityProps } from "react-native"
import { Entypo } from '@expo/vector-icons'

type Props = TouchableOpacityProps & {
    imageUrl: string
    title: string
    detail: string
}

export const ExerciseCard = ({imageUrl, title, detail,  ...rest} : Props) => {
  return (
     <TouchableOpacity {...rest}>
        <HStack alignItems= 'center' bg = 'gray.500' p = {2} rounded='md' mb = {3}>
            <Image
             source={{ uri: imageUrl}}
            alt ="woman image"
            w = {16}
            h = {16}
            rounded = {5}
            />
            <VStack ml= {4} flex = {1}>
                <Heading mb = {2} color = 'gray.200' fontSize = 'lg' fontWeight='bold'>
                {title}
                </Heading>
                <Text color = 'gray.300' numberOfLines= {2} overflow='hidden'>
                {detail}
                </Text>
            </VStack>

            <Icon as = {Entypo} name = "chevron-right" size = 'md'  color = 'gray.300'/>
        </HStack>

     </TouchableOpacity>
  )
}
