import { Authenticator } from "@aws-amplify/ui-react";
import { ChakraProvider } from "@chakra-ui/react";
import { Amplify } from "aws-amplify";

import awsExports from "../src/aws-exports";
Amplify.configure(awsExports);
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Authenticator.Provider>
        <Component {...pageProps} />
      </Authenticator.Provider>
    </ChakraProvider>
  );
}

export default MyApp;
