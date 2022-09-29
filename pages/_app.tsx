import { Authenticator } from "@aws-amplify/ui-react";
import { ChakraProvider } from "@chakra-ui/react";
import { Amplify, API, withSSRContext } from "aws-amplify";

import awsExports from "../src/aws-exports";
import { createProduct } from "../src/graphql/mutations";
import { listProducts } from "../src/graphql/queries";

Amplify.configure({ ...awsExports, ssr: true });

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