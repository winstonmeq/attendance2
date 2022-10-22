import React from "react";
import { Flex,Stack, Text, Button,Menu,
  Box,MenuButton,MenuList,MenuItem,   
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
       
      router.push('/')
    });
}

  return (
    <Box>
    <Flex
      bg={useColorModeValue('white', 'gray.800')}
      color={useColorModeValue('gray.600', 'white')}
      // minH={'60px'} width={"98vw"}
      py={{ base: 2 }}
      px={{ base: 2 }}
      borderBottom={1}
      borderStyle={'solid'}
      borderColor={useColorModeValue('gray.200', 'gray.900')}
      align={'center'}>
     
      <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
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

      <Flex display={{ base: 'none', md: 'flex' }} ml={5}>
        <Text fontSize={18} pr={5}>Welcome:</Text>
        </Flex>

        <Text
          textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
          fontFamily={'heading'}
          color={useColorModeValue('gray.800', 'white')}>
          {session && session.user.email}
        </Text>

      
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
      
       <Link href={'/components/users/createusers'}>
        <Button
          display={{ base: 'none', md: 'inline-flex' }}
          fontSize={'sm'}
          fontWeight={600}
          color={'white'}
          bg={'blue.400'}
          _hover={{
            bg: 'red.300',
          }}>
          Sign Up
        </Button>
        </Link>
      </Stack>
    </Flex>

    {/* <Collapse in={isOpen} animateOpacity > */}

       
    {session ? <Flex p={2} justifyContent={'center'} >
          
      <Stack direction={'row'}  >

       <Link href={'/'}>
        <Button
          
            fontSize={'lg'}
            fontWeight={400}         
            _hover={'red'}
            >
            Home
          </Button>
     </Link>
        <Link href={'/components/employee/emplist'}>
        <Button
         
            fontSize={'lg'}
            fontWeight={400}
         
         >
            Employees
          </Button>
     </Link>

     <Link href={'/components/latlng/latlng_list'}>
        <Button
          
            fontSize={'lg'}
            fontWeight={400}
        >
            Location
          </Button>
     </Link>
     <Link href={'/components/attendance/att_list'}>
        <Button
           
            fontSize={'lg'}
            fontWeight={400}
         
            >
            Attendance
          </Button>
     </Link>
     <Link href={'/components/travel/travel_list'}>
        <Button
           
            fontSize={'lg'}
            fontWeight={400}
            >
            Travel
          </Button>
     </Link>
     <Link href={'/components/downloader'}>
        <Button
           
            fontSize={'lg'}
            fontWeight={400}
          
            >
            Download APK
          </Button>
     </Link>


     

       </Stack>


          
    </Flex>: ""}
          
        {/* </Collapse> */}


  </Box>
   

  
  );
};

export default Header_layout;
