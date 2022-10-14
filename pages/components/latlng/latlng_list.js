import { useState } from 'react';
import DataTable from 'react-data-table-component';
import { latlnglist } from '../../../axios_con/latlng_req';
import { useEffect } from 'react';
import Image from 'next/image';
import { Flex, Avatar, Button, Spacer } from '@chakra-ui/react';
import Map_control from '../Map_control';
import { useSession } from "next-auth/react";
import Edit_latlong from './editlatlng';
import Editmap from './editlatlng';
import { useRouter } from 'next/router';
import Loader from "../loader";


const Loc_list = () => {

    const [data, setdata] = useState([])
    const {data: session} =  useSession();
    const router = useRouter()


    const getData = async (userId) => {    

        const payload = {userId}

            const loclist = await latlnglist(payload);
            

            if(!loclist.hasError == true){

                if(!loclist.body == ""){  
                  
              setdata(loclist.body);

               }      
            
              }else {

                console.log("wala data")

              }

        }

        useEffect(() => {             
          
              session && getData(session.user._id);      
    
             
            }, [session]);
    
         

            const columns = [    
 
             {        
                  name:"Name",
                  selector: row => row.locName,
                  sortable: true,                
            
              },
              {        
                name:"Latitude",
                selector: row => row.latitude,
                sortable: true,                
          
            },
          
            {        
                name:"Longitude",
                selector: row => row.longitude,
                sortable: true,                
          
            },
          
            {        
                name:"Radius",
                selector: row=> row.radius,
                sortable: true,                
          
            },
          
            {        
                name:"Action",
                cell: (d) =>(
                    <Flex direction={'row'}>
                        <Editmap />                        
                    </Flex>
                   
                    
                
            )              
          
            },            
          
            
            
            
            ]

            if (data.length == 0) {
                return <Loader />;
              }
        


    return (
    
        <Flex direction={'column'}>
         <Map_control />
             <DataTable columns ={columns} data={data} title="Location Lists"  defaultSortFieldId="createdAt" pagination />

        </Flex>
          
    
    )



}

export default Loc_list;