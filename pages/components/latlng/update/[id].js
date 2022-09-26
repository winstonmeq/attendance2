import React from "react";
import { useState } from "react";
import {latlngUpdate }from "../../../axios_con/latlng_req"
import {Box, Button, Input, Flex, InputGroup, InputLeftAddon, Stack} from "@chakra-ui/react"
import { useRouter } from "next/router";

const Update_latlong = ({id,lat, lng, rad, Name }) => {


    const [latitude, setlatitude] = useState(lat)
    const [longitude, setlongitude] = useState(lng)
    const [radius, setradius] = useState(rad)
    const [locName, setlocName] = useState(Name)
    const [userIdd, setuserIdd] = useState("631ad70c7d662c9bacd2654d")
    const [errorMessage, setErrorMessage] = useState(null);

    const router = useRouter()

    const send_latlng = async (e) => {

        e.preventDefault();

       
        const payload = {Name,lat,lng,rad}

        console.log('payload',payload)

        const result = await latlngUpdate(id,payload)
        
        console.log({result})
      
        if (result.hasError == true) {
          
            // setErrorMessage(error);

            console.log({result})

          
        } else {
  
         console.log("location data added") 

        router.reload('latlng_list')
       
      
        }
      };  

      

  const myFunction = () => {
   alert("Data Save")
  }

  return (
   <>
  
   <form onSubmit={send_latlng}>

   {/* <input type="text" value={Name} onChange={(e)=>{}} />
    <input type="text" value={lat}  onChange={(e)=>{}} />
    <input type="text" value={lng} onChange={(e)=>{}} />
    <input type="text" value={rad} onChange={(e)=>{}} />
    <input type="text" value={userIdd} onChange={(e)=>{}} /> */}

   <Button type="submit" >Save</Button>
   </form>

   </>
  );
};

export default Update_latlong;