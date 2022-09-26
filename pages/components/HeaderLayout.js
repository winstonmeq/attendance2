import React from "react";
import { Flex,Stack, Text, Button, Spacer, Box, Avatar} from "@chakra-ui/react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";


const Header_layout = () => {

const router = useRouter()
const {data} = useSession();

const sess = data;




  const logout = () => {

    signOut({ redirect: true }).then(result => {
       
      router.push('https://attendance2-dtjy7c1pz-winstonmeq.vercel.app/components/users/signIn')
    });
}




  return (
    
    <Flex 
  
  
    >
   {sess &&  
   <Box >
    <Avatar
                  size={'lg'}
                  src={
                    sess.user.image
                  }
                />
    <Text color={'whiteAlpha.900'}>Welcome! { sess.user.email}</Text>
    </Box>}
    <Spacer />
      <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}
          display={{ base: 'none', sm: 'inline-flex' }}

          >

{sess ?  <Button onClick={logout}       
            fontWeight={400}         
             >
            Sign Out
          </Button> : <Link href={'/components/users/signIn'}>
            <Button
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'gray.400'}
            href={'#'}
            _hover={{
              bg: 'gray.500',
            }}>
          Sign
          </Button>
          </Link>    
           }
          
       
            

      

          <Link href={'/components/users/createusers'}>
            <Button
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'gray.400'}
            href={'#'}
            _hover={{
              bg: 'gray.500',
            }}>
          Create Account
          </Button>
     </Link>
          
        </Stack>
    </Flex>
  
  );
};

export default Header_layout;