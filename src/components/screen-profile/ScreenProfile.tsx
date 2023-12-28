import {  HStack, Heading, ScrollView, Skeleton, Text, VStack, useToast } from "native-base"
import { HistoryHeader } from "../history-header/HistoryHeader"
import { UserPhoto } from "../user-photo/UserPhoto"
import { Input } from "../input/Input"
import { Button } from "../button/Button"
import { useState } from "react"
import { TouchableOpacity, Alert} from "react-native"
import * as imagePicker from 'expo-image-picker'
import * as FileSystem from 'expo-file-system';


export const ScreenProfile = () => {

    const photoSize = 100

    const toast = useToast()

    const [ photoIsLoading, setPhotoIsLoading ] = useState(false)
    const [userPhoto, setUserPhoto] = useState('https://avatars.githubusercontent.com/u/81826528?s=400&u=3e92f642425817729583bad23e3f1216c81561a4&v=4')

    const handleUserPhotoSelect = async () => {
        setPhotoIsLoading(true)
        try {
            const photoSelected = await imagePicker.launchImageLibraryAsync({
                mediaTypes: imagePicker.MediaTypeOptions.Images,
                quality: 1,
                aspect: [4, 4],
                allowsEditing: true,
             })

             if(photoSelected.canceled){
                return;
             }

             if(photoSelected.assets[0].uri){
                const photoInfo = await FileSystem.getInfoAsync(photoSelected.assets[0].uri);
            
                if(photoInfo.size && (photoInfo.size / 1024 / 1024) > 5){
                  return  toast.show({
                    title : 'Essa  imagem e muito grande. Escolha uma de ate 5MB',
                    placement: 'top',
                    bgColor: 'red.500'
                  })
                }
             setUserPhoto(photoSelected.assets[0].uri)
             }
        } catch (error) {
            console.log(error)
        }finally {
            setPhotoIsLoading(false)
        }
    }

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
                source = {{ uri:userPhoto}}
                alt = "profile image"
                mb = {2}
                />
            }
            <TouchableOpacity>
            <Text color = 'green.500' fontSize = 'md' onPress={handleUserPhotoSelect}>
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
