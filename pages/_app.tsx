import { Authenticator } from "@aws-amplify/ui-react";
import { ChakraProvider } from "@chakra-ui/react";
import { Amplify } from "aws-amplify";
import '@fontsource/raleway/700.css'
import '@fontsource/open-sans/400.css'

import awsExports from "../src/aws-exports";

Amplify.configure({ ...awsExports, ssr: true });
import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: `'Raleway', sans-serif`,
    body: `'Open Sans', sans-serif`,
  },
})

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Authenticator.Provider>
        <Component {...pageProps} />
      </Authenticator.Provider>
    </ChakraProvider>
  );
}

export default MyApp;