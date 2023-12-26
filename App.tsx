import {  useFonts, Roboto_400Regular, Roboto_700Bold  } from '@expo-google-fonts/roboto'
import { NativeBaseProvider, Text } from "native-base";
import { StatusBar, View } from 'react-native';
import { Loading } from './src/components/loading/Loading';
import { SignIn } from './src/screens/Signin';
import { Theme } from './src/theme/theme';
import { SignUp } from './src/screens/SignUp';
import { Routes } from './src/routes';
import { Home } from './src/screens/Home';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold})
  return (
    <NativeBaseProvider theme={Theme}>

      <StatusBar
      barStyle= 'light-content'
      backgroundColor= 'transparent'
      translucent
      />
     {
      fontsLoaded ? <Routes /> : <Loading />
     }
       
    </NativeBaseProvider>
  );
}

