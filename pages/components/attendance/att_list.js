import { useState } from 'react';
import DataTable from 'react-data-table-component';
import { attList } from '../../../axios_con/attrequest';
import { useEffect } from 'react';
import { Flex, Avatar, Box, Button, Spacer } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Loader from "../loader";
import { useSession } from "next-auth/react";
import FocusImage from './focusImage';
import Downloadxcel from './download';


const Att_list = () => {

    const [data, setdata] = useState([])
    const {data: session} =  useSession();
    const [en,seten] = useState(false);
    const router = useRouter()



    const dload = () => {
      seten(true)
    }

  
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
                name:"Selfie",
                cell: (d) =>(
                  
                    <FocusImage imagelink={d.image} />
                    
                )          
          
            },

            {        
                name:"Action",
                cell: (d) =>(
                    <Flex direction={'row'}>
                        <Button size={'sm'} onClick={dload} >Save Data</Button>                       
                    </Flex>                  
                    
                
            )              
          
            },
               
          
            
            
            
            ]


    return (
        <Flex direction={'column'}>
      <Box>
      <Button onClick={dload}>Download</Button>
      {console.log("list",data)}
             <DataTable  columns ={columns} data={data} title="Attendance Lists"  defaultSortFieldId="createdAt" pagination />

      </Box>
      <Box>
      {/* {en && <Downloadxcel data = {data} />} */}

      </Box>
       
          
        </Flex>
    


        
    )



}

export default Att_list;