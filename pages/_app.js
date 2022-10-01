import { ChakraProvider} from "@chakra-ui/react"
import Layout from "../layout";
import { SessionProvider } from "next-auth/react";
// import '../styles/globals.css'
// import '../styles/Marker.css';
// import '../styles/newmarker.css';



function MyApp({ Component, pageProps }) {

  return (
    <SessionProvider>
 <ChakraProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
     
    </ChakraProvider>
    </SessionProvider>
   
 
  )
 

}

export default MyApp
