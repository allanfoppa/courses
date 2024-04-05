import { Flex, Text } from '@chakra-ui/react'

export const Header  = () => {
  return(
    <Flex padding={'25px'} justifyContent={'center'} boxShadow={'2xl'}>
      <Text fontSize={'xl'} as={'b'}>Dio Bank</Text>
    </Flex>
  )
}
