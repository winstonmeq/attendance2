
import Image from 'next/image';
import { Flex, Avatar,Modal,ModalContent, Button, Spacer } from '@chakra-ui/react';






const EmpImage = ({imageLink}) => {

    const { isOpen, onOpen, onClose } = useDisclosure()


return (
    <>
    <Flex>
    <Button onClick={onOpen}>Image Open </Button>
<Modal isOpen={isOpen} onClose={onClose}>
<ModalContent>
<Image src={imageLink} width={"100"} height={"100"} ></Image>
</ModalContent>
</Modal>

    
                    
    </Flex>
    </>
)


}

export default EmpImage;