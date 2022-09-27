import Image from "next/image";
import { Flex, Box,Input, 
  Button, InputGroup,InputLeftAddon, Center, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/router";
import { createUser } from "../../../axios_con/user_request";
import { signOut } from "next-auth/react";




const CreateUser = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const router = useRouter();
  const [image, setimage] = useState(null)
  const [imageInput, setimageInput] = useState(null)



  const logout = () => {

    signOut({ redirect: true }).then(result => {
       
      router.push('https://attendance2-flame.vercel.app/components/users/signIn')
    });
}



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

    form.append('email',email)
    form.append('password', password)
    form.append('image', imageInput)

    const result = await createUser(form);

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

    
  };

  

  return (
    <Flex bg={"whiteAlpha.100"} align={'center'} justify={'center'} direction={'column'}>
    <Box>
    <form onSubmit={signUpHandler}>
        

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
        onChange={(e) => {handleimage(e)}}
      />
    </InputGroup>

    <Box>
     {image && <Image src={image} width={200} height={200} alt=""/>}
    </Box>

    <Button  type="submit">
         Create Account
    </Button>

       </Stack>

    
    
  


     
     </form>
    </Box>

    </Flex>
  );
};
export default CreateUser;
