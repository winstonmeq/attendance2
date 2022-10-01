
import { Flex, Box,Input,useDisclosure,Modal,ModalBody,ModalContent, ModalFooter,
    Button, Avatar, InputGroup,InputLeftAddon, Center, Stack } from "@chakra-ui/react";
import Image from 'next/image';







const FocusImage = ({imagelink}) => {

    const { isOpen, onOpen, onClose } = useDisclosure()

return (
    <Flex>
     <Button onClick={onOpen}><Avatar size={'sm'}
                  src={imagelink}></Avatar> </Button>
      

     <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
           <Box>

           <Image
                // Absolute URL
                src={imagelink}
                alt='User profile picture'
                width={300}
                height={300}
            />

           </Box>
        </ModalContent>


     </Modal>

    </Flex>
)



}

export default FocusImage