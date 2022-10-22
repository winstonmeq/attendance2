import React from 'react';
import useDownloader from 'react-use-downloader';
import { Flex, Box, Progress, Text,  Button, Spacer } from "@chakra-ui/react";
import Link from 'next/link';
export default function App() {
  const {
    size,
    elapsed,
    percentage,
    download,
    cancel,
    error,
    isInProgress,
  } = useDownloader();

  const fileUrl = 'https://drive.google.com/file/d/1YawP0qWLlaj6WgN6nsPfsVE2EbFHLUvw/view?usp=sharing'
  const filename = 'dtr.apk';

  return (
    <Flex direction={'column'} width={"50vw"}>
    {/* <Box>
    Download is in {isInProgress ? 'in progress' : 'stopped'}

    </Box> */}
    <Box>
    <Link href={'https://drive.google.com/file/d/1YawP0qWLlaj6WgN6nsPfsVE2EbFHLUvw/view?usp=sharing'}>
    <Button >
        Download APK from google drive!
      </Button>
    </Link>
   
    </Box>
{/*      
     <Box>
     <Button onClick={() => download(fileUrl, filename)}>
        Click to download the file
      </Button>
     <Button onClick={() => cancel()}>Cancel the download</Button>

     </Box>
      <Text for="file">Download size in bytes {size}</Text>
      <Text >Downloading progress:</Text>
      <Progress id="file" value={percentage} max="100" />
      <Text> Elapsed time in seconds {elapsed}</Text>
      {error && <p>possible error {JSON.stringify(error)}</p>} */}
    

    </Flex>
   
  );
}