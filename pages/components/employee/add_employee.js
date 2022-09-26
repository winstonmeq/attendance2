import Image from "next/image";
import { Flex, Box,Input,useDisclosure,Modal,ModalBody,ModalContent, ModalFooter,
  Button, InputGroup,InputLeftAddon, Center, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/router";
import { addEmployee } from "../../../axios_con/employee_request";
import { useSession } from "next-auth/react";



const Add_employee = () => {
  
  const [bioId, setbioId] = useState("");
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [designation, setdesignation] = useState("");
  const [office, setoffice] = useState("");
  const [mobile, setmobile] = useState("");
  const [address, setaddress] = useState("");
  const [userId, setuserId] = useState("")

  const {data: session} =  useSession();

  const [image, setimage] = useState(null)

  const [imageInput, setimageInput] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null);

  const router = useRouter();




  const handleimage = (e) => {
    const file = e.target.files[0];
    console.log(file)
    setimageInput(file)
    const fileReader = new FileReader();
    fileReader.onload = function (e) {
     console.log(e.target.result)
     setimage(e.target.result)
    }
    fileReader.readAsDataURL(file)
   
   }


  const signUpHandler = async (e) => {
    
    e.preventDefault();

    const form = new FormData();

    form.append('bioId',bioId)
    form.append('fName', fName)
    form.append('lName', lName)
    form.append('designation', designation)
    form.append('office', office)
    form.append('mobile', mobile)
    form.append('address', address)
    form.append('userId',session.user._id)
    form.append('image', imageInput)

    const result = await addEmployee(form); 

   

    if (result.hasError == true) {
      if (result.errorMessage.code == 10011) {

        setErrorMessage("Duplicate Employee Id");

      } else {

        setErrorMessage(result.errorMessage);
        
      }
    } else {

      setErrorMessage(result.result);

      router.push('/');
    }

    
  };

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    
 <Flex>
 {/* {console.log(session.user._id)} */}
 <Button onClick={onOpen}>Add Employee</Button>
<Modal isOpen={isOpen} onClose={onClose}>
  
  <ModalContent>
  <Box px={8}>
    <form onSubmit={signUpHandler}>        

        <Box px={2} py={2} fontSize={26} >Add Employee</Box>


       <Stack mt={5}>
         
       <InputGroup>
       <InputLeftAddon>Bio ID</InputLeftAddon>

         <Input
           type="text"
           value={bioId}
           onChange={(e) => {setbioId(e.target.value)}}
         />
        
       </InputGroup>

       <InputGroup>
       <InputLeftAddon>First Name</InputLeftAddon>

         <Input
           type="text"
           value={fName}
           onChange={(e) => {setfName(e.target.value)}}
         />
        
       </InputGroup>
       

      
       <InputGroup>
       <InputLeftAddon>Last Name</InputLeftAddon>

         <Input
           type="text"
           value={lName}
           onChange={(e) => setlName(e.target.value)}
         />
         
       </InputGroup>

       
       <InputGroup>
       <InputLeftAddon>Designation</InputLeftAddon>

         <Input
           type="text"
           value={designation}
           onChange={(e) => setdesignation(e.target.value)}
         />
         
       </InputGroup>

       
       <InputGroup>
       <InputLeftAddon>Office</InputLeftAddon>

         <Input
           type="text"
           value={office}
           onChange={(e) => setoffice(e.target.value)}
         />
         
       </InputGroup>

       
       <InputGroup>
       <InputLeftAddon>Mobile #</InputLeftAddon>

         <Input
           type="text"
           value={mobile}
           onChange={(e) => setmobile(e.target.value)}
         />
         
       </InputGroup>

       <InputGroup>
       <InputLeftAddon>Address</InputLeftAddon>

         <Input
           type="text"
           value={address}
           onChange={(e) => setaddress(e.target.value)}
         />
         
       </InputGroup>
      
     
       <InputGroup>
      <Input
        type="file"       
        onChange={(e) => {handleimage(e)}}
      />
    </InputGroup>

    <Box width={'100'}>
     {image && <Image src={image} width={100} height={100} alt=""></Image>}
    </Box>

   

       </Stack>

    
    
       <ModalFooter>
       <Button type="submit">
        Save
       </Button>
       <Box w={5}></Box>
       <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
       </Button>
       </ModalFooter>


     
     </form>
    </Box>


 
  </ModalContent>
</Modal>
 </Flex>
    
  );
};
export default Add_employee;
