import React from "react";
import { useState } from "react";
import {addlocation }from "../../axios_con/locRequest"
import {Box, Button, Input, Flex, InputGroup, InputLeftAddon, Stack} from "@chakra-ui/react"


const AddLoc = ({lat, lng, rad, Name }) => {


    const [latitude, setlatitude] = useState(lat)
    const [longitude, setlongitude] = useState(lng)
    const [radius, setradius] = useState(rad)
    const [locName, setlocName] = useState(Name)
    const [userIdd, setuserIdd] = useState("631ad70c7d662c9bacd2654d")
    const [errorMessage, setErrorMessage] = useState(null);


    const sendLocData = async (e) => {

        e.preventDefault();
       
        const payload = {Name,lat,lng,rad,userIdd}

        console.log('payload', payload)

        const result = await addlocation(payload)
        
        console.log({result})
      
        if (result.hasError == true) {
          
            // setErrorMessage(error);

            console.log({result})

          
        } else {
  
         console.log("location data added")         
      
        }
      };  

      

  const myFunction = () => {
   alert("Data Save")
  }

  return (
   <>
  
   <form onSubmit={sendLocData}>

   {/* <input type="text" value={Name} onChange={(e)=>{}} />
    <input type="text" value={lat}  onChange={(e)=>{}} />
    <input type="text" value={lng} onChange={(e)=>{}} />
    <input type="text" value={rad} onChange={(e)=>{}} />
    <input type="text" value={userIdd} onChange={(e)=>{}} /> */}

   <Button type="submit" onClick={myFunction}>Save</Button>
   </form>

   </>
  );
};

export default AddLoc;