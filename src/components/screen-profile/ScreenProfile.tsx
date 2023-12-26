import { HStack, Heading, ScrollView, Skeleton, Text, VStack } from "native-base"
import { HistoryHeader } from "../history-header/HistoryHeader"
import { UserPhoto } from "../user-photo/UserPhoto"
import { Input } from "../input/Input"
import { Button } from "../button/Button"
import { useState } from "react"
import { TouchableOpacity } from "react-native"


export const ScreenProfile = () => {
    const photoSize = 100

    const [ photoIsLoading, setPhotoIsLoading ] = useState(false)
  return (
    <VStack>
        <HistoryHeader title = "Perfil" />
        <ScrollView contentContainerStyle = {{paddingBottom: 400}}>
        <VStack 
        alignItems='center' 
        my = {8} 
        justifyContent= 'center'
        
        >
            {
                photoIsLoading ?
                
                <Skeleton
                 w = {photoSize}
                 h = {photoSize}
                 rounded = 'full'
                 startColor='gray.500'
                 endColor= 'gray.400'
                />
                :
                
            <UserPhoto
               size = {photoSize}
               source = {{ uri:'https://avatars.githubusercontent.com/u/81826528?v=4'}}
               alt = "profile image"
               mb = {2}
            />
            }
            <TouchableOpacity>
            <Text color = 'green.500' fontSize = 'md'>
                Alterar foto
            </Text>
            </TouchableOpacity>
        </VStack>
        <VStack px = {8}>
        <Input
                placeholder ="Atef Chelagham"  
                color = 'gray.500'
            />
            <Input
                placeholder ="atef.chela@gmail.com" 
                isDisabled
                color = 'gray.400'
            />

            <Heading color = "white" mt = {10} mb ={2} fontSize='md'>
                Alterar senha
            </Heading>
            <Input
                placeholder ="Senha antiga"  
                color = 'gray.500'
                secureTextEntry
            />
            <Input
                placeholder ="Nava senha" 
                color = 'gray.500'
                secureTextEntry
            />
            <Input
                placeholder ="confirma senha" 
                color = 'gray.500'
                secureTextEntry
            />
            <Button 
            title = "Atualizar"
            />
        </VStack>
        </ScrollView>
    </VStack>
  )
}
