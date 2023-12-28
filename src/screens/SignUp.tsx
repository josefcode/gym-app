import { VStack, Image, Text, Center, Heading, ScrollView } from "native-base"
import backgroundImg from '../assets/background.png'
import LogoSVG from '../assets/logo.svg'
import { Input } from "../components/input/Input"
import { Button } from '../components/button/Button'
import { useNavigation } from "@react-navigation/native"
import { useForm, Controller } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

type FormDataProps = {
    name: string
    email: string
    password: string
    confirmPassword: string
}

const schema = yup
  .object({
    name: yup.string().required("Informe o nome"),
    email: yup.string().required("Informe o email").email('email invalido'),
    password: yup.string().required('Informe a senha').min(6, 'a senha deve ter pelo menso 6 digitos'),
    confirmPassword: yup.string().required('confirme a senha').oneOf([yup.ref('password'), null], 'A confirmacao da senha nao confere' ),
  })
  .required()

export const SignUp = () => {
    const { goBack } = useNavigation()
    // const {
    //     control,
    //     handleSubmit,
    //     formState: { errors },
    //   } = useForm<FormDataProps>({
    //     defaultValues: {
    //       name: "",
    //       email: "",
    //       password: '',
    //       confirmPassword: ''
    //     },
    //   })
    const {
        control,
        handleSubmit,
        formState: { errors },
      } = useForm<FormDataProps>({
        resolver: yupResolver(schema),
      })

    const handleSignUp = ({name, email, password, confirmPassword} : FormDataProps) => {
          console.log(name, email, password, confirmPassword)
        }

    const handleNavigate = () => {
        goBack()
    }
  return (
    <ScrollView contentContainerStyle = {{flexGrow : 1}}
    showsVerticalScrollIndicator = {false}
    >
        <VStack flex = {1}  px = {10}>
        <Image 
        resizeMode="contain"
        source = {backgroundImg}
        defaultSource={backgroundImg}
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

            <Controller
              control={control}
              name = 'name'
              render = {({field: {onChange, value}}) => (
                  <Input
                  placeholder ="Nome" 
                  onChangeText={onChange}
                  value = {value}
                  errorMessage={errors.name?.message }
                  />
              )}
            />

            <Controller
              control={control}
              name = 'email'
              render = {({field: {onChange, value}}) => (
                  <Input
                  placeholder ="Email" 
                  onChangeText={onChange}
                  value = {value}
                  errorMessage={errors.email?.message }
                  />
              )}
            />

            <Controller
              control={control}
              name = 'password'
              render = {({field: {onChange, value}}) => (
                  <Input
                  placeholder ="Senha" 
                  onChangeText={onChange}
                  value = {value}
                  errorMessage={errors.password?.message }
                  />
              )}
            />
            <Controller
              control={control}
              name = 'confirmPassword'
              render = {({field: {onChange, value}}) => (
                  <Input
                  placeholder ="Cofirmar a senha" 
                  onChangeText={onChange}
                  value = {value}
                  onSubmitEditing={handleSubmit(handleSignUp)}
                  returnKeyType="send"
                  errorMessage={errors.confirmPassword?.message }
                  />
              )}
            />
             
     
            <Button
            title = "Criar e acessar"
            onPress = {handleSubmit(handleSignUp)}
            />
        
        </Center>
            <Button
                title = "Voltar para o login"
                variant = "outline"
                mt = {12}
                onPress = {handleNavigate}
                />
        </VStack>
    </ScrollView>
  )
}
