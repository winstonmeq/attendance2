
import Image from 'next/image';
import { Flex, Avatar,Modal,ModalContent, Button, Spacer } from '@chakra-ui/react';






const EmpImage = ({imageLink}) => {

    const { isOpen, onOpen, onClose } = useDisclosure()


return (
    <>
    <Flex>
    <Button onClick={onOpen}><Avatar size={'lg'}
                  src={imageLink}></Avatar> </Button>
<Modal isOpen={isOpen} onClose={onClose}>
<ModalContent>
image here
</ModalContent>
</Modal>

    
                    
    </Flex>
    </>
)


}

export default EmpImage;