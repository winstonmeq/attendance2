
import { Flex, Box,Input,useDisclosure,Modal,ModalBody,ModalContent, ModalFooter,
    Button, InputGroup,InputLeftAddon, Center, Stack } from "@chakra-ui/react";
import React from "react";
import GoogleMapReact from "google-map-react";

const Travelmap = ({ coordinates }) => {

    const { isOpen, onOpen, onClose } = useDisclosure()



  const renderMarkers = (map, maps) => {
    let marker = new maps.Marker({
      position: coordinates,
      map,
      title: "Hello World!",
    });
    return marker;
  };

  return (
    <Flex >  
        <Button onClick={onOpen}>Maps</Button>
      
        <Modal isOpen={isOpen} onClose={onClose}  >

        <ModalContent maxW={'60vw'}>
        <Box h={"60vh"}>
        <GoogleMapReact
          yesIWantToUseGoogleMapApiInternals={true}
          defaultCenter={{ lat: 7.123, lng: 125.234 }}
          center={{ lat: 7.123, lng: 125.234 }}
          defaultZoom={8}
          onGoogleApiLoaded={({ map, maps }) => {
            renderMarkers(map, maps);
          }}
        ></GoogleMapReact>
      </Box>

        <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
       </Button>
        </ModalContent>
       
       </Modal>
        
        </Flex>
   
  );
};

export default Travelmap;
