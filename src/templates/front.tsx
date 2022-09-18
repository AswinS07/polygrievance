import React from 'react';
import {
  Flex,
  Heading,
  Input,
  Button,
  FormLabel,
  Switch,
  useColorMode,
  useColorModeValue,
  Center,
  Stack,Checkbox,Link,
  useBreakpointValue,
} from '@chakra-ui/react';
import { Logo } from '../Logo';
const Login = () => {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue('gray.100', 'gray.700');

  return (

    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
           <Flex flex={1}>
           
            <Logo />
            
        </Flex>
        <Flex p={'4'} flex={1} align={'center'} justify={'center'} flexDirection="column"
        bg={formBackground}
        paddingTop='30'
        paddingBottom='30'
        paddingLeft={30}
        paddingRight={30}
        borderRadius={8}
        boxShadow="lg"
        alignItems="center"
        >
      
          <Stack spacing={4}  maxW={'md'} 
          w={'2xl'} h={'1xl'}
          py={{ base: '0', sm: '8' }}
          px={{ base: '4', sm: '10' }}
          bg={useBreakpointValue({ base: 'transparent', sm: 'bg-surface' })}
          boxShadow={{ base: 'none', sm: useColorModeValue('md', 'md-dark') }}
          borderRadius={{ base: 'none', sm: 'xl' }}>
            
            <Heading fontSize={'4xl'} paddingBottom='4' paddingTop={8} fontFamily={"Zilla Slab"}><Center>CARMEL</Center><Center>POLYTECHNIC</Center></Heading>
            <Input
          placeholder="johndoe@gmail.com"
          type="email"
          variant="filled"
          mb={3}
        />
        <Input
          placeholder="**********"
          type="password"
          variant="filled"
          mb={6}
        />
        <Button colorScheme='facebook' mb={8} fontFamily='Zilla Slab' fontSize={20}>
          LOGIN
        </Button>

            <Stack spacing={6}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.500'}>Forgot password?</Link>
              </Stack>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
            <FormLabel htmlFor="dark_mode" mb="0">
            Enable Dark Mode?
            </FormLabel>
            <Switch
            id="dark_mode"
            colorScheme="teal"
            size="lg"
            onChange={toggleColorMode}
            />
              </Stack>
              
              
            </Stack>
            
          </Stack>
          
        </Flex>
    
     
      </Stack>
  );
};

export default Login;