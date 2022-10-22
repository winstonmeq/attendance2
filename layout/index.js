import {Flex,Box,VStack, StackDivider, Spacer,Grid, Container} from "@chakra-ui/react"
import List from "../pages/components/List";
import Header_layout from "../pages/components/HeaderLayout";
import { useState } from "react";
import {useSession } from "next-auth/react";
import Header2 from "../pages/components/Header2";




const Layout = ({children}) =>{

  const {data:session} = useSession();

    return (

        
<Flex direction={'column'} px="4" py="4" >

<Box direction={'row'}>

  <Header_layout />


</Box>



<Flex bg={'gray.50'}  pl={10} pr={10}>

 <Container maxWidth={'100vw'}>
 {children}
 </Container>
  

</Flex>
 



</Flex>


)
}

export default Layout;