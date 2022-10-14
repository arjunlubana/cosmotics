import { Authenticator } from "@aws-amplify/ui-react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "@fontsource/open-sans/400.css";
import "@fontsource/raleway/700.css";
import { Amplify } from "aws-amplify";
import MainLayout from "../layouts/main";
import awsExports from "../src/aws-exports";

Amplify.configure({ ...awsExports, ssr: true });

export type MyAppProps = {
  Component: any;
  pageProps: any;
};

const theme = extendTheme({
  fonts: {
    heading: `'Raleway', sans-serif`,
    body: `'Open Sans', sans-serif`,
  },
});

function MyApp({ Component, pageProps }: MyAppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Authenticator.Provider>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </Authenticator.Provider>
    </ChakraProvider>
  );
}

export default MyApp;
