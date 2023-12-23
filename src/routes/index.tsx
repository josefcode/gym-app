import { NavigationContainer, DefaultTheme } from "@react-navigation/native"
import { AuthRoutes } from "./auth.route"
import { Box, useTheme } from 'native-base'


export const Routes = () => {
    const {colors} = useTheme()

    const theme = DefaultTheme
    theme.colors.background = colors.gray[700]
  return (

    <NavigationContainer theme = {theme}>
        <AuthRoutes />
    </NavigationContainer>
  
  )
}
