
import { Flex, Box,Input,useDisclosure,Modal,ModalBody,ModalContent, ModalFooter,
    Button, Avatar, InputGroup,InputLeftAddon, Center, Stack } from "@chakra-ui/react";
import Image from 'next/image';







const FocusImage = ({imagelink}) => {

    const { isOpen, onOpen, onClose } = useDisclosure()

return (
    <Flex>
     <Button onClick={onOpen}> </Button>
      

     <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
           <Box>

           <Avatar size={'lg'}
                  src={imagelink}></Avatar>
            {/* <Image src={imagelink} width={"100"} height={"100"} /> */}

           </Box>
        </ModalContent>


     </Modal>

    </Flex>
)



}

export default FocusImage