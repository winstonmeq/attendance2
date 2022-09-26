import { Flex, Box,Input,useDisclosure,Modal,ModalBody,ModalContent, ModalFooter,
    Button,ListItem, InputGroup,InputLeftAddon, Select,Center, Stack } from "@chakra-ui/react";
  import { useState } from "react";
  import { useRouter } from "next/router";
  import { latlnglist,latlngId } from '../../../axios_con/latlng_req';
  import { useEffect } from 'react';
  import {addlocation }from "../../../axios_con/locRequest"
  import { useSession } from "next-auth/react";




const EmpAsign = ({empid,bioid,fname,lname}) => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [data, setdata] = useState([])
    const [data2, setdata2] = useState([])

    const [latitude, setlatitude] = useState('')
    const [longitude, setlongitude] = useState('')
    const [empId, setempId] = useState(empid)
    const [radius, setradius] = useState('')
    const [locName, setlocName] = useState('')
    const [valid, setvalid] = useState('')
    const {data: session} =  useSession();


    const router = useRouter()



   const getData = async (userId) => {    

    const payload = {userId}

            const latlngemp = await latlnglist(payload);           

            if(!latlngemp.hasError == true){

                if(!latlngemp.body == ""){  
                  
              setdata(latlngemp.body);

               }      
            
              }else {

                console.log("wala data")

              }

        }

       

        const getData2 = async (id) => {    

              const latlngIdd = await latlngId(id);   
              
              console.log('getlatlngId',latlngIdd)
  
              if(!latlngIdd.hasError == true){
  
                  if(!latlngIdd.body == ""){  
                    
                setdata2(latlngIdd.body);

                setlocName(latlngIdd.body[0].locName)
                setlatitude(latlngIdd.body[0].latitude)
                setlongitude(latlngIdd.body[0].longitude)
                setradius(latlngIdd.body[0].radius)
  
                 }      
              
                }else {
  
                  console.log("wala data")
  
                }
  
          }


    const send_emploc = async (e) => {

              e.preventDefault();               
      
             
              const payload = {locName,latitude,longitude,radius,empId,userId:session.user._id}
      
              console.log('payload', payload)
      
             const result = await addlocation(payload)
              
            
              if (result.hasError == true) {
                
                  // setErrorMessage(error);
      
                  console.log({result})
      
                
              } else {
        
               console.log("Assign Employee Location Successfully addedd") 
              router.replace('emplist')
             
            
              }
      };  

     const latId=(latidd)=>{

      console.log(latidd)
      getData2(latidd)    

     }

return (
    <>
    {console.log('data2',latitude)}
    <Button onClick={(e)=>{onOpen();getData(session.user._id)}}>Assignment</Button>

<Modal isOpen={isOpen} onClose={onClose}>
  
  <ModalContent>
  <Box px={8}>
    <form onSubmit={send_emploc}>
        

        <Box px={2} py={2} fontSize={26} >Assignment Area</Box>


       <Stack mt={5}>

      
         
       <InputGroup>
       <InputLeftAddon>Bio ID</InputLeftAddon>

         <Input
           type="text"
           className="form-control"
           value={bioid}
           onChange={(e) => {setbioId(e.target.value)}}
         />
        
       </InputGroup>

       <InputGroup>
       <InputLeftAddon>First Name</InputLeftAddon>

         <Input
           type="text"
           className="form-control"
           value={fname}
           onChange={(e) => {setfName(e.target.value)}}
         />
        
       </InputGroup>
       

      
       <InputGroup>
       <InputLeftAddon>Last Name</InputLeftAddon>

         <Input
           type="text"
           className="form-control"
           value={lname}
            onChange={(e) => setlName(e.target.value)}
         />
         
       </InputGroup>

       <InputGroup>
       <Select placeholder='Select Area' onChange={(e) => {latId(e.target.value)}} >
       {data.map((items,e) =>(
        <option key={e}  value={items._id}>{items.locName}</option>

       )
       )}
         
         
        </Select>
       </InputGroup>

             
      
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
    </>
)

}

export default EmpAsign;