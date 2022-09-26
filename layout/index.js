import {Flex,Box,VStack, StackDivider, Spacer,Grid} from "@chakra-ui/react"
import List from "../pages/components/List";
import Header_layout from "../pages/components/HeaderLayout";
import { useState } from "react";
import {useSession } from "next-auth/react";




const Layout = ({children}) =>{

  const {data:session} = useSession();

    return (

        
<Flex direction={'column'} px="4" py="4" >

<Flex direction={'row'}  w="100%" pb={1}>
<Box w='100vw'  
borderBottom='1px'
borderBottomColor='gray.400'
 borderTopLeftRadius={20} borderTopRightRadius={20} 
 bg='green.800'
 px="4" py="4"
 >
  <Header_layout />
  </Box>

</Flex>



<Flex direction={'row'}>
    
{session  ? <Box bg='green.800' px={8} py={8} borderRadius={10}>
<List />
</Box> : ""}

  <Box w='86vw' borderTopLeftRadius={20} borderTopRightRadius={20} px={2} py={2}>
  {children}
  </Box>
 


</Flex>
 
</Flex>
    )
}

export default Layout;