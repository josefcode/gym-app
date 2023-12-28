import { FlatList, HStack, Heading, Text, VStack } from 'native-base'
import { HomeHeader } from '../components/home-header/HomeHeader'
import { Group } from '../components/group/Group'
import { useState } from 'react'
import { ExerciseCard } from '../components/exersice-card/ExerciseCard'
import { Exercise } from './Exercise'
import { useNavigation } from '@react-navigation/native'
import { AppRoutesProps } from '../routes/app.route'

export const Home = () => {
  const [exerciseData, setExerciseData ] = useState([
    {
      imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29ya291dHxlbnwwfHwwfHx8MA%3D%3D',
      title: 'Puxada frontal',
      detail: '3 séries x 12 repetições',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29ya291dHxlbnwwfHwwfHx8MA%3D%3D',
      title: 'Remada curvada',
      detail: '3 séries x 12 repetições',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29ya291dHxlbnwwfHwwfHx8MA%3D%3D',
      title: 'Remada unilateral',
      detail: '3 séries x 12 repetições',
    },
  ])
  const [groups, setGroups] = useState<string[]>(['costa', 'Bíceps', 'ombro', 'Tríceps' ])
  const [groupSelected, setGroupSelected] = useState('costa')

  const navigation = useNavigation<AppRoutesProps>();
  const handleOpenExerciseDetails = () => {
      navigation.navigate('exercise')
  }
  return (
   <VStack flex = {1}>
     <HomeHeader />
     <FlatList
          data={groups} 
          keyExtractor={item => item}
          renderItem={
            ({item}) => (
              <Group
              name = {item}
              isActive = {groupSelected === item}
              onPress = {() => setGroupSelected(item)}
              />
            )
          }
          horizontal
          showsHorizontalScrollIndicator = {false}
          _contentContainerStyle={{
            px: 8,
          }}
          my = {10}
          maxH = {10}
          minH = {10}
      />

      <VStack flex = {1} px = {8}>
        <HStack justifyContent={'space-between'} mb = {5} >
          <Heading color = 'gray.200' fontSize = 'md'  fontFamily="heading" >Exercicios</Heading>

          <Text color = 'gray.200' fontSize = 'sm'>
            {groups.length}
          </Text>

        
        </HStack>
        <FlatList
         data = {exerciseData}
         keyExtractor={data => data.title}
         renderItem={({item}) => {
          const {imageUrl, title, detail} = item
          return (
            <ExerciseCard 
            imageUrl = {imageUrl} 
            title = {title} 
            detail = {detail} 
            onPress={handleOpenExerciseDetails}
            />
          )
         }}
         showsHorizontalScrollIndicator = {false}
         _contentContainerStyle={{ paddingBottom: 20}}
        />
        
      </VStack>
   </VStack>
  )
}
