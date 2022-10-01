import { useState } from 'react';
import Image from "next/image";
import { Flex, Box,Input, 
  Button, InputGroup,InputLeftAddon, Center, Stack } from "@chakra-ui/react";
import { createUser } from "../../../axios_con/user_request";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";



export default function Home() {
  const [imageSrc, setImageSrc] = useState();
  const [uploadData, setUploadData] = useState();
  const [errorMessage, setErrorMessage] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [image, setimage] = useState('');


  const router = useRouter();




  const logout = () => {

    signOut({ redirect: true }).then(result => {
       
     router.push('https://attendance2-flame.vercel.app/components/users/signIn')
    });
}

  /**
   * handleOnChange
   * @description Triggers when the file input changes (ex: when a file is selected)
   */

  function handleOnChange(changeEvent) {
    const reader = new FileReader();

    reader.onload = function(onLoadEvent) {
      setImageSrc(onLoadEvent.target.result);
      setUploadData(undefined);
    }

    reader.readAsDataURL(changeEvent.target.files[0]);
  }




  async function handleOnSubmit(event) {
    
    event.preventDefault();

    const form = event.currentTarget;
    const fileInput = Array.from(form.elements).find(({ name }) => name === 'file');

    const formData = new FormData();

    for ( const file of fileInput.files ) {
      formData.append('file', file);
    }

    formData.append('upload_preset', 'userImage');

    const data = await fetch('https://api.cloudinary.com/v1_1/dagi3xoz0/image/upload', {
      method: 'POST',
      body: formData
    }).then(r => r.json());


    setImageSrc(data.secure_url);
    setUploadData(data);

  

    //pag mag gamit me og payload json type ang gina send ko.
      
    const payload = {email, password,image: data.secure_url}

     
    const result = await createUser(payload);

    console.log({result})

    if (result.hasError == true) {

      if (result.errorMessage.code == 10011) {

        setErrorMessage("Duplicate Email");

      } else {

        setErrorMessage(result.errorMessage);
        
      }


    } else {

      setErrorMessage(result);
     
      logout()

      router.push('/components/users/signIn');

    }



  }

  
  return (
    <Flex bg={"whiteAlpha.100"} align={'center'} justify={'center'} direction={'column'}>
    <Box>
    <form onSubmit={handleOnSubmit}>
        

        <Box fontSize={20} >Create User</Box>

       {<p>{errorMessage}</p>}

       <Stack mt={5}>
         
      
       <InputGroup>
       <InputLeftAddon>Email</InputLeftAddon>

         <Input
           type="text"
           value={email}
           onChange={(e) => {setEmail(e.target.value)}}
           placeholder="Email Add"
         />
        
       </InputGroup>
       

      
       <InputGroup>
       <InputLeftAddon>Password</InputLeftAddon>

         <Input
           type="text"
           value={password}
           onChange={(e) => setPassword(e.target.value)}
           placeholder="Password"
         />
         
       </InputGroup>
      
     
       <InputGroup>
      <Input
        type="file" 
        name='file'      
         onChange={(e) => {handleOnChange}}
      />
    </InputGroup>

    <Box>
      {imageSrc && <Image src={imageSrc} width={200} height={200} alt=""/>}
    </Box>

    <Button  type="submit">
         Create Account
    </Button>

       </Stack>

    
    
  


     
     </form>
    </Box>

    </Flex>
  );
}
