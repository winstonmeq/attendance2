
import React from "react";
import { Flex,Stack, Text, Button,
  Box,
   
    IconButton,
    Collapse,
    Icon,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure, Avatar} from "@chakra-ui/react";

import Link from "next/link";


const Header2 = () => {

    const { isOpen, onToggle } = useDisclosure();

    return (
      <Box>
       <Collapse in={isOpen} animateOpacity>
    <Flex direction={'column'}>
   
   klsdjfljsldjf
   
    </Flex>
     
    </Collapse>

      </Box>
  
    )
}

export default Header2


