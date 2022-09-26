import React from "react"
import Link from "next/link"
import {Box, Flex,Button,leftIcon,AddIcon,Menu,MenuButton,
Avatar,MenuList,MenuItem,MenuDivider,Stack, Spacer} from "@chakra-ui/react"
import {useSession } from "next-auth/react";


const List = () => {

  const {data: session} = useSession();


return (
    
    <Flex alignItems={'center'} direction={'column'} height= {"100vh"}>
          
          <Stack
          flex={{ base: 0, sm: 0 }}
          justify={'flex-end'}
          direction={'column'}
          spacing={6}>

<Link href={'/'}>
        <Button
            as={'a'}
            fontSize={'lg'}
            fontWeight={400}
            color={'whiteAlpha.800'}
            variant={'link'}
            href={'#'}>
            Home
          </Button>
     </Link>
        <Link href={'/components/employee/emplist'}>
        <Button
            as={'a'}
            fontSize={'lg'}
            fontWeight={400}
            variant={'link'}
            color={'whiteAlpha.800'}
            href={'#'}>
            Employees
          </Button>
     </Link>

     <Link href={'/components/latlng/latlng_list'}>
        <Button
            as={'a'}
            fontSize={'lg'}
            fontWeight={400}
            color={'whiteAlpha.800'}
            variant={'link'}
            href={'#'}>
            Location
          </Button>
     </Link>
     <Link href={'/components/attendance/att_list'}>
        <Button
           
            fontSize={'lg'}
            fontWeight={400}
            color={'whiteAlpha.800'}
            variant={'link'}
            >
            Attendance
          </Button>
     </Link>

     
   
       
        </Stack>
        

       
   
    
          </Flex>


    
 
       
    
)


}


export default List;