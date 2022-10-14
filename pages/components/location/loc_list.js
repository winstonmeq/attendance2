import { useState } from 'react';
import DataTable from 'react-data-table-component';
import { locList } from '../../../axios_con/locRequest';
import { useEffect } from 'react';
import Image from 'next/image';
import { Flex, Avatar, Button, Spacer } from '@chakra-ui/react';
import Map_control from '../Map_control';
import Loader from "../loader";


const Loc_list = () => {

    const [data, setdata] = useState([])
   

    const getData = async (usrlvl) => {    

            const loclist = await locList(usrlvl);
            

            if(!loclist.hasError == true){

                if(!loclist.body == ""){  
                  
              setdata(loclist.body);

               }      
            
              }else {

                console.log("wala data")

              }

        }

        useEffect(() => {             
          
              getData();      
    
             
            }, []);
    

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
                        <Button size={'sm'}>Edit</Button> 
                        
                        <Button size={'sm'}>Assign</Button> 
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