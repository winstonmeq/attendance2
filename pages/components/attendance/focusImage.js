
import { Flex, Box,Input,useDisclosure,Modal,ModalBody,ModalContent, ModalFooter,
    Button, Avatar, InputGroup,InputLeftAddon, Center, Stack } from "@chakra-ui/react";







const FocusImage = ({imagelink}) => {

    const { isOpen, onOpen, onClose } = useDisclosure()

return (
    <Flex>
     <Button onClick={onOpen}><Avatar size={'lg'}
                  src={imagelink}></Avatar> </Button>
      

     <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
            lsdkfjsldf
        </ModalContent>


     </Modal>

    </Flex>
)



}

export default FocusImage