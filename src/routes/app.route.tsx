import {  createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { Home } from '../screens/Home'
import { Exercise } from '../screens/Exercise'
import { History } from '../screens/History'
import { Profile } from '../screens/Profile'
import HomeSvg from '../assets/home.svg'
import ProfileSvg from '../assets/profile.svg'
import HistorySvg from '../assets/history.svg'
import ExerciseSvg from '../assets/exercise.svg'
import { useTheme } from 'native-base'
import { Platform } from 'react-native'


type Props = {
    home : undefined
    history: undefined
    profile: undefined
    exercise: undefined
}  

export type AppRoutesProps = BottomTabNavigationProp<Props>


const { Navigator, Screen} = createBottomTabNavigator<Props>()

export const  AppRoutes = () => {
    const {sizes, colors} = useTheme()

    const iconSize = sizes[6]

    return(
        <Navigator screenOptions={{ 
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: colors.green[500],
            tabBarInactiveTintColor: colors.gray[200],
            tabBarStyle : {
                backgroundColor: colors.gray[600],
                borderTopColor: 'transparent',
                height: Platform.OS === "android" ? 'auto': 96,
                paddingBottom: sizes[10],
                paddingTop: sizes[6]
            }
            }} >
            <Screen
            name ="home"
            component = {Home}
            options = {{
                tabBarIcon: ({color}) => (<HomeSvg 
                    fill = {color}
                    width = {iconSize}
                    height = {iconSize}
                />),
                title : 'home'
            }}
            />
            <Screen
            name ="history"
            component = {History}
            
            options = {{
                tabBarIcon: ({color}) => (
                <HistorySvg 
                fill = {color}
                width = {iconSize}
                height = {iconSize}
                />
                ),
                title : 'history'
            }}
            />
            <Screen
            name ="profile"
            component = {Profile}
            options = {{
                tabBarIcon: ({color}) => (<ProfileSvg
                    fill = {color}
                    width = {iconSize}
                    height = {iconSize}
                    />),
                    title : 'profile'
            }}
            />
            <Screen
            name ="exercise"
            component = {Exercise}
            options = {{
                tabBarButton: () => null,
                title : 'exercise'
            }}
            />
        </Navigator>
    )
}
