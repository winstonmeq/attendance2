import { useState } from "react";
import { getSession,getCsrfToken, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import Loader from "../loader.js";
import { Flex, Box,Input, 
    Button, InputGroup,InputLeftAddon, Center, Stack } from "@chakra-ui/react";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const router = useRouter();

  


  const loginHandler = async (e) => {
    e.preventDefault();

    const payload = { email, password };
    
    const result = await signIn("credentials", { ...payload, redirect: false });
    

    if (!result.error) {

      const session = await getSession();
  
    //  console.log('session',session)
      router.replace("/");
     
    } else {

      setErrorMessage(result.error);
    }
  };


  return (
    <Flex bg={"whiteAlpha.100"} align={'center'} justify={'center'} direction={'column'}>
    <Box>
    <form onSubmit={loginHandler}>
        

        <Box fontSize={20} >Sign In</Box>

       {<p>{errorMessage}</p>}

       <Stack mt={5}>
         
      
       <InputGroup>
       <InputLeftAddon>Email</InputLeftAddon>

         <Input
           type="text"
           className="form-control"
           value={email}
           onChange={(e) => {setEmail(e.target.value)}}
           placeholder="Email Add"
         />
        
       </InputGroup>
       

      
       <InputGroup>
       <InputLeftAddon>Password</InputLeftAddon>

         <Input
           type="text"
           className="form-control"
           value={password}
           onChange={(e) => setPassword(e.target.value)}
           placeholder="Password"
         />
         
       </InputGroup>
      
         
   
    <Button  type="submit">
        Login
    </Button>

       </Stack>

    
    
  


     
     </form>
    </Box>

    </Flex>
   
  )
}
export default Login;
