import { useState } from 'react';
import DataTable from 'react-data-table-component';
import { attList } from '../../../axios_con/attrequest';
import { useEffect } from 'react';
import { Flex, Avatar, Box, Button, Spacer } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Loader from "../loader";
import { useSession } from "next-auth/react";
import FocusImage from './focusImage';
import { useRef } from 'react';
import { useDownloadExcel } from 'react-export-table-to-excel';
import moment from 'moment/moment';

const Att_list = () => {

    const [data, setdata] = useState([])
    const {data: session} =  useSession();
    const router = useRouter()


    const tableRef = useRef(null);

    const { onDownload } = useDownloadExcel({
        currentTableRef: tableRef.current,
        filename: 'attendance',
        sheet: 'attlog'
    })

    // const download = () => {
    //   const dummyData = "rahul,delhi,accountsdept\n";
    //   const csvContent = `data:text/text;charset=utf-8,${dummyData}`;
    //   const encodedURI = encodeURI(csvContent);
    //   window.open(encodedURI);
    // };


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
                        <Button size={'sm'}>Edit</Button>                       
                    </Flex>                  
                    
                
            )              
          
            },
               
          
            
            
            
            ]


    return (
        <Flex direction={'column'}>

      <Box>
      {console.log("list",data)}
             <DataTable  columns ={columns} data={data} title="Attendance Lists"  defaultSortFieldId="createdAt" pagination />

      </Box>
      <Box>
      <Button _hover={'dd'} onClick={onDownload}> Export excel </Button>

<table  ref={tableRef}>
 <tbody>
 {data.map((items)=>(

  <tr>
      <td>{items.empInfo[0].bioId}</td>
       <td>{moment(items.timelog).format('YYYY-MM-D, hh:mm:ss')}</td>
       <td>1</td>
       <td>0</td>   
       
     </tr>


 )

 )}
     
   
 </tbody>
</table>
      </Box>
       
          
        </Flex>
    


        
    )



}

export default Att_list;