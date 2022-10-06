import { ChakraProvider } from "@chakra-ui/react";
import dayjs from "dayjs";
import type { AppProps } from "next/app";
import { customTheme } from "../styles/customTheme";
require("dayjs/locale/fr");

dayjs.locale("fr");

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
