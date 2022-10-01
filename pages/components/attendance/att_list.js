import { useState } from 'react';
import DataTable from 'react-data-table-component';
import { attList } from '../../../axios_con/attrequest';
import { useEffect } from 'react';
import Image from 'next/image';
import { Flex, Avatar, Button, Spacer } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Loader from "../loader";
import { useSession } from "next-auth/react";




const Att_list = () => {

    const [data, setdata] = useState([])
    const {data: session} =  useSession();
    const router = useRouter()


    const getData = async (userId) => {     

      const payload = {userId}

            const attlist = await attList(payload);

            if(!attlist.hasError == true){                
           

                if(!attlist.body == ""){  

              
              console.log(attlist.body);
                  
              setdata(attlist.body);

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
                  name:"EmpId",
                  cell: (d) =>(
                 <>
                    {d.empInfo[0] ? d.empInfo[0].bioId : 'wrong empId'}
                 </>               
                
            )                  
            
              },
              {        
                name:"month",
                selector: row=>row.month,
                sortable: true,                
          
            },
            {        
                name:"Time In",
                selector: row=>row.timeIn,
                sortable: true,                
          
            },
            {        
              name:"Time Out",
              selector: row=>row.timeOut,
              sortable: true,                
        
          },
          
           
            {        
                name:"Image",
                cell: (d) =>(
                    
                        <Avatar size={'lg'}
                  src={d.image}></Avatar> 
                    
                )          
          
            },

            {        
                name:"Action",
                cell: (d) =>(
                    <Flex direction={'row'}>
                        <Button size={'sm'}>Edit</Button>                       
                    </Flex>                  
                    
                
            )              
          
            },
               
          
            
            
            
            ]


    return (
        <>
       
             {console.log("list",data)}
             <DataTable columns ={columns} data={data} title="Attendance Lists"  defaultSortFieldId="createdAt" pagination />

        </>
    )



}

export default Att_list;