import { Box, Button, Center, Heading, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { Card } from "../components/Card";
import DButton from "../components/DButton";
import { login } from "../services/login";
import { changeLocalStorage } from "../services/storage";

const Home = () => {

  const { setIsLoggedIn } = useContext(AppContext)
  const navigate = useNavigate()

  const [email, setEmail] = useState<string>('')
  const [userPassword, setUserPassword] = useState<string>('')

  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  const validateUser = async (email: string) => {
    const loggedIn = await login(email, userPassword)

    if (!loggedIn) {
      return alert('Email inválido')
    }

    setIsLoggedIn(true)
    changeLocalStorage({ login: true })
    navigate('/conta/1')
  }

  return (
    <Box padding="25px" color={"black"}>
      <Card>
        <Center>
          <Heading color={"black"} marginBottom={4}>Faça o login</Heading>
        </Center>
        <Input
          placeholder="email"
          colorScheme={"blackAlpha"}
          borderColor={"blackAlpha.400"}
          marginBottom={2} value={email} onChange={(event) => setEmail(event.target.value)} />
        <InputGroup size='md'>
          <Input
            pr='4.5rem'
            type={show ? 'text' : 'password'}
            placeholder="Enter password"
            colorScheme={"blackAlpha"}
            borderColor={"blackAlpha.400"}
            marginBottom={2}
            onChange={(e) => setUserPassword(e.target.value)}
          />
          <InputRightElement width='4.5rem'>
            <Button h='1.75rem' size='sm' onClick={handleClick}>
              {show ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>
        <Center>
          <DButton
            onClick={() => validateUser(email)}
          />
        </Center>
      </Card>
    </Box>
  );
}

export default Home;
