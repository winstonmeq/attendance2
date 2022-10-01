
import { Flex, Box,Input,useDisclosure,Modal,ModalBody,ModalContent, ModalFooter,
    Button, InputGroup,InputLeftAddon, Center, Stack } from "@chakra-ui/react";







const FocusImage = ({imagelink}) => {

    const { isOpen, onOpen, onClose } = useDisclosure()

return (
    <Flex>
     <Button onClick={onOpen}>kkkk </Button>
      

     <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
            lsdkfjsldf
        </ModalContent>


     </Modal>

    </Flex>
)



}

export default FocusImage