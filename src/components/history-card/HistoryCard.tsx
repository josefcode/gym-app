import { HStack, Heading, Text, VStack } from "native-base"

interface Props {
    title: string
    desc: string
}


export const HistoryCard = ({title, desc} : Props) => {
  return (
    <HStack w = 'full' px = {5} py = {4} bg= 'gray.600' rounded='md' alignItems= 'center' mb = {5}>
        <VStack mr = {5} flex = {1}>
            <Heading color = 'white' fontSize='md' textTransform='capitalize'>
            {title}
            </Heading>

            <Text color = 'gray.200'>
            {desc}
            </Text>
        </VStack>
        <Text color = 'gray.300'>
            08:56
        </Text>
    </HStack>
  )
}
