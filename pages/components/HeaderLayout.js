import React from "react";
import { Flex,Stack, Text, Button,
  Box,
   
    IconButton,
    Collapse,
    Icon,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure, Avatar} from "@chakra-ui/react";

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import {
  HamburgerIcon,
  CloseIcon,
  ArrowUpDownIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';

const Header_layout = () => {

const router = useRouter()
const {data: session} =  useSession();


const { isOpen, onToggle } = useDisclosure();



  const logout = () => {

    signOut({ redirect: true }).then(result => {
       
      router.push(process.env.NEXTAUTH_URL + '/components/users/signIn')
    });
}

  return (
    <Box>
    <Flex
      bg={useColorModeValue('white', 'gray.800')}
      color={useColorModeValue('gray.600', 'white')}
      minH={'60px'}
      py={{ base: 2 }}
      px={{ base: 4 }}
      borderBottom={1}
      borderStyle={'solid'}
      borderColor={useColorModeValue('gray.200', 'gray.900')}
      align={'center'}>
      <Flex
        flex={{ base: 1, md: 'auto' }}
        ml={{ base: -2 }}
        display={{ base: 'flex', md: 'none' }}>
        <IconButton
          onClick={onToggle}
          icon={
            isOpen ? <ArrowUpDownIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
          }
          variant={'ghost'}
          aria-label={'Toggle Navigation'}
        />
      </Flex>
      <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
        <Text
          textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
          fontFamily={'heading'}
          color={useColorModeValue('gray.800', 'white')}>
          {session && session.user.email}
        </Text>

        {/* <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
         Desktop
        </Flex> */}
      </Flex>

      <Stack
        flex={{ base: 1, md: 0 }}
        justify={'flex-end'}
        direction={'row'}
        spacing={6}>
        {session ?  
        <Button onClick={logout}        
          fontSize={'sm'}
          fontWeight={400}          
          >
          Sign Out
        </Button>
       :  
       <Link href={'/components/users/signIn'}>
        <Button         
          fontSize={'sm'}
          fontWeight={400}          
          >
          Sign In
        </Button>
        </Link>
        
       }
            
        <Button
          display={{ base: 'none', md: 'inline-flex' }}
          fontSize={'sm'}
          fontWeight={600}
          color={'white'}
          bg={'pink.400'}
          href={'#'}
          _hover={{
            bg: 'red.300',
          }}>
          Sign Up
        </Button>
      </Stack>
    </Flex>

    <Collapse in={isOpen} animateOpacity>
    Menu
    </Collapse>
  </Box>
   
  
  );
};

export default Header_layout;
