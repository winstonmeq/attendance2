import {Box, Button, Input,Flex, InputGroup, InputLeftAddon, Stack} from "@chakra-ui/react"
import React from "react"
import {GoogleMap, useLoadScript, Marker} from "@react-google-maps/api";
import GoogleMapReact from "google-map-react";
import { Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import { useState } from "react";
import List from "./List";
import MyMarker from "./marker";
import { useRouter } from "next/router";
import {addlocation} from "../../axios_con/locRequest"
import AddLoc from "./AddLoc";
import Add_latlong from "./latlng/add_latlng";



const AnyReactComponent = ({text}) => <div className="pin"> 
{/* <Box bg={'white'} width={10}>
  {text}
 
</Box> */}
</div>;

let circle;


const Map = ({coordinates}) => {

    const [lat, setlat] = useState('')
    const [lng, setlng] = useState('')
    const [rad, setrad] = useState('')    
    const [locName, setlocName] = useState('')
    const [userId, setuserId] = useState("631ad70c7d662c9bacd2654d")

    // const { isLoaded } = useLoadScript({
    //     googleMapsApiKey:"AIzaSyDUCDHF_rSlszH9LpPhce8PCSbja4yqhaQ"
    // })

    // if(!isLoaded) return <div>Loading....</div>


    const sendLocData = async () => {
 
      const payload = { locName, latData, lngData, radData, userId};   

      console.log(payload)

    
      const result = await addlocation(payload)
  
      console.log({result})
    
      if (result.hasError == true) {
        
        console.log("error")   
        
      } else {

       console.log("location data added")         
    
      }
    };  

    



       const apiIsLoaded = (map, maps) => {
        circle = new maps.Circle({
          strokeColor: "#FF0000",
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: "#FF0000",
          fillOpacity: 0.3,
          map,
          // center: {lat:x,lng:y},
          // radius: rad
          
        });
      };

      
    const renderMarkers = (map, maps) => {
      let marker = new maps.Marker({
      position:coordinates,
      map,
      title: 'Hello World!',
      
      });
      return marker;
     };


    
   
const points = [
    { id: 1, title: "Round Pond", lat: 7.345, lng: 125.234 },
    { id: 2, title: "The Long Water", lat: 7.145, lng: 125.897 },
   
  ];
      
  const onChange = (e) => {   
     
      setrad(e.target.value)   
  };

 
  const changeRadius = (e) => {

      
    if(rad > 0) {
      circle.setCenter({lat:lat,lng:lng})
      circle.setRadius(Number(rad))
    }
    
  };






    return (
      
 <Flex direction={'column'}>
<Box h={'40vh'}>
<GoogleMapReact
               yesIWantToUseGoogleMapApiInternals={true}            
               defaultCenter = {{lat:7.123,lng:125.234}}
               center = {{lat:7.123,lng:125.234}}
               defaultZoom={8}
               onChange={(e) => {
                 console.log(e.center.lat)
                
               }}
              //  onGoogleApiLoaded={({ map, maps }) => {points.map((items)=>{
             
              //   renderMarkers(map, maps,items.lat,items.lng)

              //  })}}
              onClick={(e)=>{
                setlat(e.lat)
                setlng(e.lng)

               }}
              onGoogleApiLoaded={({ map, maps }) => {renderMarkers(map,maps), apiIsLoaded(map,maps)}
              }


            
               >

            {/* {points.map(({ lat, lng, id, title }) => {
          return (
            <MyMarker key={id} lat={lat} lng={lng} text={id} tooltip={title} />
          );
        })} */}
           
               <AnyReactComponent lat={lat} lng={lng} text="Marker" />

               </GoogleMapReact>
</Box>
 <Box >
 <InputGroup>
 <InputLeftAddon>Name</InputLeftAddon>
 <Input value={locName} onChange={(e)=>{setlocName(e.target.value)}} />
 </InputGroup>

 <InputGroup>
 <InputLeftAddon>Latitude</InputLeftAddon>
 <Input value={lat} onChange={(e)=>{setlat(e.target.value)}} />
 </InputGroup>
 <InputGroup>
 <InputLeftAddon>Longtitude</InputLeftAddon>
 <Input value={lng} onChange={(e)=>{setlng(e.target.value)}} />
 </InputGroup> 

 
  
  <Flex direction={'row'}>

  <InputGroup>
  <InputLeftAddon>Radius</InputLeftAddon>
  <Input
  placeholder="Enter radius"
  type="number"
  min="10"
  name="inputRad"
  onChange={(e) =>{setrad(e.target.value)}}
  />
  </InputGroup>
  <Button
  onClick={(e) =>{changeRadius(e)}}
  >Draw</Button>
  <Add_latlong lat={lat} lng={lng} rad = {rad} Name = {locName} />
  </Flex>
 

              
</Box>

</Flex>

          
    
    
        
    )
    
   
}

export default Map;