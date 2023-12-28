import {  VStack, Icon, HStack, Heading, Text, Image, Box } from 'native-base'
import { TouchableOpacity } from 'react-native'
import { Feather} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { AppRoutesProps } from '../routes/app.route'
import BodySvg from '../assets/body.svg'
import { Button } from '../components/button/Button'
import RepeatSvg from '../assets/series.svg'



export const Exercise = () => {
  const { goBack } = useNavigation<AppRoutesProps>()

  const handleGoBack = () => {
       goBack()
  }
  return (
   <VStack flex = {1}>
      <VStack px = {8} bg= 'gray.600' pt = {12}>
        <TouchableOpacity>
          <Icon 
          as = {Feather} 
          name = "arrow-left"
          color = 'green.500'
          size = {6}
          onPress={handleGoBack}
          />
        </TouchableOpacity>

          <HStack justifyContent='space-between' mt = {4} mb = {8}alignItems='center'>
            <Heading color = 'gray.100' fontSize='md' flexShrink={1}  fontFamily="heading" >
              Puxada Frontal
            </Heading>
             <HStack alignItems='center'>
              <BodySvg />
              <Text color = 'gray.200'>
                Costas
              </Text>
            </HStack>
          </HStack>

       

      </VStack>

      <VStack p = {8}>
            <Image
              w = 'full'
              h = {80}
              source = {{
                uri: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29ya291dHxlbnwwfHwwfHx8MA%3D%3D'
              }}
              alt = "woman training"
              rounded = 'lg'
              overflow= 'hidden'
              mb = {3}
            />

           <Box bg = 'gray.500' pt = {4} px = {4} rounded = 'lg'>
            <HStack justifyContent='space-between' mb = {4} px = {4} py = {1} alignItems='center'>
                <HStack>
                  <RepeatSvg />
                  <Text color= 'gray.100' ml = {2}>
                    3 series
                  </Text>
                </HStack>
                <HStack>
                  <Icon 
                  as = {Feather} 
                  name = "repeat"
                  color = 'green.500'
                  size = {5}
                  onPress={handleGoBack}
                  mr = {2}
                  />
                  <Text color= 'gray.100'>
                    12 repeticoes
                  </Text>
                  </HStack>
             </HStack>
     
              <Button  title = "Marcar como realizado"/>
            </Box>
          </VStack>
   </VStack>
  )
}
