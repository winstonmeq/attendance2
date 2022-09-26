import { Oval, Audio} from  'react-loader-spinner'
import { Flex, Avatar, Button, Spacer } from '@chakra-ui/react';



const Loader =()=>{

    return (
       <Flex justify={'center'} alignContent={'center'} w={'100vw'} h={'100vh'} >
          <Oval color="#00BFFF" height={60} width={60} />
       </Flex>
    )

}

export default Loader;