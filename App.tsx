import {  useFonts, Roboto_400Regular, Roboto_700Bold  } from '@expo-google-fonts/roboto'
import { GluestackUIProvider,Text, Box } from "@gluestack-ui/themed"
import { StatusBar, View } from 'react-native';
import { Loading } from './src/components/loading/Loading';
import { config } from './config/gluestack-ui.config';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold})
  return (
    <GluestackUIProvider config={config}>

      <StatusBar
      barStyle= 'light-content'
      backgroundColor= 'transparent'
      translucent
      />
     {
      !fontsLoaded ? <Text>Hello words</Text> : <Loading />
     }
       
    </GluestackUIProvider>
  );
}

