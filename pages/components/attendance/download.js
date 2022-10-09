import { Flex, Avatar, Box, Button, Spacer } from '@chakra-ui/react';
import { useRef } from 'react';
import { useDownloadExcel } from 'react-export-table-to-excel';
import moment from 'moment/moment';


const Downloadxcel = ({data}) => {

    
    const tableRef = useRef(null);

    const { onDownload } = useDownloadExcel({       

        currentTableRef: tableRef.current,
        filename: 'attendance',
        sheet: 'attlog'
    })


    
    return (
      <Flex direction={'column'}>
    <Button _hover={'dd'} onClick={onDownload}> Export excel </Button>

      <Box>     

<table  ref={tableRef}>
 <tbody>
 <tr>
   <th>bioId</th>
   <th>TimeClock</th>
   
   <th>In</th>
   
   <th>Out</th>
   </tr>
 {data && data.map((items,i)=>(
  
  <tr key={i}>
       <td>{items.empInfo[0].bioId}</td>
       <td>{moment(items.timelog).format('YYYY-MM-D HH:mm:ss')}</td>
       
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

export default Downloadxcel;
