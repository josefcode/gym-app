import { Center, Heading } from 'native-base'
import React from 'react'

interface Props {
    title : string
  }
  

export const HistoryHeader = ({title} : Props) => {
  return (
    <Center 
    backgroundColor= 'gray.600' 
    pt = {16} 
    pb = {5} 
    px = {8} 
    alignItems='center' 
    justifyContent='center'
    >
        <Heading color = 'gray.100' fontSize='lg'>
        {title}
        </Heading>
  </Center>
  )
}
