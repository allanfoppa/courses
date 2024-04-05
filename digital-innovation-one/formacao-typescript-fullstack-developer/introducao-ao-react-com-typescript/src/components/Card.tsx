import {
  Center,
  Input,
  Box,
} from '@chakra-ui/react'
import { login } from '../services/login';
import { Button } from './Button';
import { Heading } from '@chakra-ui/react'
import { useState } from 'react';

export const Card = () => {

  const [ userName, setUserName ] = useState('')
  const [ userPassword, setUserPassword ] = useState('')

  return(
    <>
      <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
        <Box backgroundColor='#FFFFFF' color={"black"} borderRadius='25px' padding='15px' >
          <Center>
            <Heading marginBottom={4}>Faça o login</Heading>
          </Center>
          <Input
            placeholder="userName"
            colorScheme={"blackAlpha"}
            borderColor={"blackAlpha.400"}
            marginBottom={2}
            onChange={(e) => setUserName(e.target.value)}
          />
          <Input
            placeholder="password"
            colorScheme={"blackAlpha"}
            borderColor={"blackAlpha.400"}
            marginBottom={2}
            onChange={(e) => setUserPassword(e.target.value)}
          />
          <Center>
            <Button text='Button' click={() => login({ userName })} />
          </Center>
        </Box>
      </Box>
    </>
  )
}
