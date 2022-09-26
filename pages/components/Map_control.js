
import { Flex, Box,Input,useDisclosure,Modal,ModalBody,ModalContent, ModalFooter,
  Button, InputGroup,InputLeftAddon, Center, Stack } from "@chakra-ui/react";
import Map from './Map'
import { useEffect, useState } from 'react'




const Map_control = () =>{

    const [coordinates, setCoordinates] = useState({})
    const { isOpen, onOpen, onClose } = useDisclosure()

    useEffect(() => {
      
      navigator.geolocation.getCurrentPosition(({coords:{latitude, longitude}}) => {
       console.log('latlng',{latitude,longitude})
        setCoordinates({lat:latitude ,lng:longitude})
      });
     
    },[])
    
    
    
      return (
        
       
        <Flex >  
        <Button onClick={onOpen}>Add Location</Button>
      
        <Modal isOpen={isOpen} onClose={onClose}  >

        <ModalContent maxW={'60vw'}>
        <Box   px={5} py={5} >

        <Map coordinates = {coordinates}/>
        
        </Box>

        <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
       </Button>
        </ModalContent>
       
       </Modal>
        
        </Flex>
      
     
     

        
       
     
        
        
      )





}

export default Map_control;