import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SignIn } from "../screens/Signin";
import { SignUp } from "../screens/SignUp";
import React from 'react'

type AuthProps = {
    signIn: undefined,
    signUp: undefined
}

export type AuthNavigationProps = NativeStackNavigationProp<AuthProps>

const { Navigator, Screen} = createNativeStackNavigator<AuthProps>()

export const AuthRoutes = () => {
  return (
    <Navigator screenOptions={{headerShown: false}}>
        <Screen
          name = "signIn"
          component={SignIn}
        />
        <Screen
          name = "signUp"
          component={SignUp}
        />
    </Navigator>
  )
}
