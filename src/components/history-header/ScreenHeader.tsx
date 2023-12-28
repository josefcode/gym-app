import { Heading, VStack, SectionList, Text } from "native-base"
import { HistoryCard } from "../history-card/HistoryCard"
import { useState } from "react"
import { HistoryHeader } from "./HistoryHeader"

export const ScreenHeader = () => {

  const [exerciseList, SetExerciseList] = useState([
     {
      date : "26.08.22",
      data : [
        {
        desc:'Puxada frontal',
        title: 'costas',
      },
        {
        desc:'Remada unilateral',
        title: 'costas',
      },
      ]
     },
     {
      date : "27.08.22",
      data : [{
        desc:'Puxada frontal',
        title: 'costas',
      },]
     },

  ])
  return (
    <VStack 
     flex = {1}
    >
      <HistoryHeader title = "Historico de Exercicio" />

      <SectionList
        sections = {exerciseList}
        keyExtractor={item => item.title}
        renderItem={({item}) => {
          return(
          <HistoryCard 
          title = {item.title}
          desc = {item.desc}
          />
          )
        }}
        renderSectionHeader = {({section}) => (
          <Heading color = "gray.200" fontSize='md' mt = {10} mb = {3}  fontFamily="heading" >
              {section.date.toString()}
          </Heading>
        )}
        px = {8}
        contentContainerStyle = {
          exerciseList.length === 0 && {flex: 1, justifyContent: 'center'}
        }
        ListEmptyComponent={() => (
          <Text color = 'gray.100' justifyContent='center' alignItems= 'center'>
            Nao ha exercicios registrador ainda
            Vamos fazer exercicios hoje?
          </Text>
        )}
      />
    </VStack>
  )
}
