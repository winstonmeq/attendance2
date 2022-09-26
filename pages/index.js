import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Flex, Box, Text, Spacer, color} from "@chakra-ui/react"
import Map from './components/Map'
import { useEffect, useState } from 'react'
import MyMarker from './components/marker'
import AddLoc from './components/AddLoc'




export default function Home() {



  return (
    <Flex direction={'column'}
    // justify={"center"}
    // alignItems={"center"}
    height={"100vh"}    
    position={"relative"}
    >  
  
 
<Flex direction={{ base: 'column', md: 'row', lg: 'row' }}>
<Box w={{ base: '100%', md: '50%', lg: '100%' }}>
      <Text fontSize={{ base: '20px', md: '30px', lg: '35px' }}>
      Mobile time tracking
Turn any device into a time clock app
Give your employees options to track time on site, remote, or even from the road.
Employee GPS time tracking
Use our geolocation technology to ensure your team are in the right place at the right time.
Face recognition attendance
Eliminate buddy punching and time thefts with face recognition tracking. Attendance is made easy with a selfie.
Offline time tracking software
No internet? No problem. Track time even when the connection drops.
      </Text>
      </Box>
      <Box w={{ base: '80%', md: '60%', lg: '60%' }} >
       <Image src={"/images/GPSFR-Manila.png"} alt={"GPS"} width={500}
      height={500} ></Image>
      </Box>
    
</Flex>

<Flex direction={{ base: 'column', md: 'row', lg: 'row' }} >
  
  <Box w={{ base: '100%', md: '50%', lg: '100%' }}>
  <Text fontSize={{ base: '20px', md: '30px', lg: '35px' }}>
  The new standard of time tracking software.
  Real-time data for accurate attendance
Monitor employee productivity while on the go
Attendance data synced from the attendance app to the cloud so you can monitor team performance whether on the road or at office.
  </Text>
      </Box>
      <Box w={{ base: '80%', md: '60%', lg: '60%' }} >
       <Image src={"/images/offline-clock-in-and-out.png"} alt={"offline"} width={500}
      height={500} ></Image>
      </Box>
     
    </Flex>




    </Flex>
 
 
    
    
  )
}
