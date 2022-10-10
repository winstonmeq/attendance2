import { useState } from 'react';
import DataTable from 'react-data-table-component';
import { travel_list } from '../../../axios_con/travel_request';
import { useEffect } from 'react';
import { Flex, Avatar, Box, Button, Spacer } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Loader from "../loader";
import { useSession } from "next-auth/react";
import Travel_image from './travel_image';
import Travelmap from './travel_map';

const Travel_list = () => {

    const [data, setdata] = useState([])
    const {data: session} =  useSession();
    const router = useRouter()

  
    const getData = async (userId) => {     

      const payload = {userId}

            const list = await travel_list(payload);

            if(!list.hasError == true){                
           

                if(!list.body == ""){  

              
              console.log('travel list',list.body);
                  
              setdata(list.body);

               }      
            
              }else {
                console.log("wala data")
              }

        }

        useEffect(() => {             
          
          session && getData(session.user._id) 
    
             
            }, [session]);

        
    

            const columns = [    
 
             {        
                  name:"bioId",
                  cell: (d) =>(
                 <>
                    {d.empInfo[0] ? d.empInfo[0].bioId : 'wrong bioId'}
                 </>               
                
            )                  
            
              },
              
            {        
              name:"Timelog",
              selector: row=>row.timelog,
              sortable: true,                
        
          },
          
           
            {        
                name:"Selfie",
                cell: (d) =>(
                  
                    <Travel_image imagelink={d.image} />
                    
                )          
          
            },

          
            {        
              name:"Action",
              cell: (d) =>(
                  <Flex direction={'row'}>
                      <Travelmap coordinates={{lat:d.lat, lng: d.lng}} />    
                  </Flex>                  
                  
              
          )              
                  
          
            },
               
          
            
            
            
            ]


    return (
        <Flex direction={'column'}>
      
      {console.log("list",data)}
             <DataTable  columns ={columns} data={data} title="Travel Lists"  defaultSortFieldId="createdAt" pagination />

      
   
          
        </Flex>
    


        
    )



}

export default Travel_list;