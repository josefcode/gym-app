import { VStack, Image, Text, Center, Heading, ScrollView } from "native-base"
import backgroundImg from '../assets/background.png'
import LogoSVG from '../assets/logo.svg'
import { Input } from "../components/input/Input"
import { Button } from '../components/button/Button'


export const SignUp = () => {
  return (
    <ScrollView contentContainerStyle = {{flexGrow : 1}}
    showsVerticalScrollIndicator = {false}
    >
        <VStack flex = {1} bg = "gray.700" px = {10}>
        <Image 
        resizeMode="contain"
        source = {backgroundImg}
        alt ="woman drive bike"
        position= "absolute"
        />

        <Center mt= {40} mb = {10}>
        <LogoSVG />
       
        <Text color = "gray.100" fontSize= 'sm' >
        Treine sua mente e o seu corpo
        </Text>
        </Center>

        <Center >
            <Heading color = "gray.100"  mb = {6} fontFamily="heading" >
                    Acesse sua conta
            </Heading>
            <Input
            placeholder ="Nome" 
            />
            <Input
            placeholder ="Email" 
            keyboardType="email-address"
            autoCapitalize="none"
            />
            <Input 
            placeholder ="Senha" 
            secureTextEntry
            />
            <Button
            title = "Criar e acessar"
            />
        
        </Center>
            <Button
                title = "Voltar para o login"
                variant = "outline"
                mt = {24}
                />
        </VStack>
    </ScrollView>
  )
}
